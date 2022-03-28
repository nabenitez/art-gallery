import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getArtWorkById } from '../services/art-api';

const useArtWork = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      ['artwork-detail', router.isReady],
      async () => {
        if (typeof id === 'string' && router.isReady)
          return await getArtWorkById(id);
      },
      {
        keepPreviousData: true,
      },
    );
  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    isReady: router.isReady,
  };
};

export default useArtWork;
