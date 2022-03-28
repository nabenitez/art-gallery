import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import useDebounce from '../src/hooks/use-debounce';
import { useQuery, useQueryClient } from 'react-query';
import { fetchArtWorks, searchArtWorks } from '../src/services/art-api';
import { getImageUrl } from '../src/utils/helpers';
import {
  ErrorScreen,
  HeroCard,
  LoadingScreen,
  SearchField,
} from '../src/components';

type ArtWork = {
  id: string;
  title: string;
  image_id: string;
  exhibition_history: string;
  category_titles: string[];
};

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 500);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      ['works', page, filters, debouncedSearch],
      async () => {
        if (searchText) {
          return await searchArtWorks(searchText, page);
        }
        return await fetchArtWorks(page);
      },
      {
        keepPreviousData: true,
      },
    );

  const handlePageChange = (_event: any, page: number) => {
    if (!isPreviousData) setPage(page);
  };

  //Pre fetch next page based on react-query docs
  useEffect(() => {
    if (data?.pagination.next_url) {
      queryClient.prefetchQuery(['projects', page + 1], () =>
        fetchArtWorks(page + 1),
      );
    }
  }, [data, page, queryClient]);

  if (isError) return <ErrorScreen />;
  if (isLoading) return <LoadingScreen />;
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          my: 4,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ py: 2 }}>
            <Grid item xs={12} sm={6}>
              <SearchField
                searchText={searchText}
                isFetching={isFetching}
                setSearchText={setSearchText}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {data.data.map((artWork: ArtWork, index: number) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
                  <HeroCard
                    id={artWork.id}
                    fetching={isFetching}
                    title={artWork.title}
                    description={artWork.exhibition_history || undefined}
                    image={getImageUrl(artWork.image_id)}
                    categories={artWork.category_titles}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={data.pagination.total_pages}
              color="secondary"
              onChange={handlePageChange}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
