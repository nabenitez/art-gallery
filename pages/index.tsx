import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import useArtWorks from '../src/hooks/use-art-works';
import { getImageUrl } from '../src/utils/helpers';
import {
  ErrorScreen,
  HeroCard,
  LoadingScreen,
  SearchField,
  FiltersAutocomplete,
} from '../src/components';

type ArtWork = {
  id: string;
  title: string;
  image_id: string;
  exhibition_history: string;
  artist_display: string;
  category_titles: string[];
};

const filterLabels = [
  'Painting',
  'Print',
  'Drawing and Watercolor',
  'Sculpture',
  'Mask',
  'Textile',
  'Miniature',
];

const Home: NextPage = () => {
  const {
    isLoading,
    isError,
    data,
    isFetching,
    searchText,
    setSearchText,
    handleOnChangeFilters,
    handlePageChange,
  } = useArtWorks();

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
            <Grid item xs={12} sm={6}>
              <FiltersAutocomplete
                options={filterLabels}
                onChange={handleOnChangeFilters}
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
                    artistDisplay={artWork.artist_display}
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
