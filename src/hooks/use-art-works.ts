import { useState, useEffect } from 'react';
import useDebounce from './use-debounce';
import { fetchArtWorks, queryArtWorks } from '../services/art-api';
import useFilters from '../hooks/use-filters';
import { useQuery, useQueryClient } from 'react-query';
import { getArtworksParsedQuery } from '../utils/helpers';

const useArtWorks = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { filters, handleOnChangeFilters } = useFilters();
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 500);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      ['works', page, filters, debouncedSearch],
      async () => {
        if (searchText || filters.length > 0) {
          const result = await queryArtWorks(
            getArtworksParsedQuery(filters, searchText),
            page,
          );
          if (page > result.pagination.total_pages) setPage(1);
          return result;
        }
        return await fetchArtWorks(page);
      },
      {
        keepPreviousData: true,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    );

  const handlePageChange = (_event: any, page: number) => {
    if (!isPreviousData) setPage(page);
  };

  //Pre fetch next page based on react-query docs
  useEffect(() => {
    if (data?.pagination.next_url) {
      queryClient.prefetchQuery(['works', page + 1], () =>
        fetchArtWorks(page + 1),
      );
    }
  }, [data, page, queryClient]);

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    searchText,
    setSearchText,
    filters,
    handleOnChangeFilters,
    page,
    handlePageChange,
  };
};

export default useArtWorks;
