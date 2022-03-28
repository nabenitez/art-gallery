import type { NextPage } from 'next';
import Head from 'next/head';
import { DetailedCard, ErrorScreen, LoadingScreen } from '../../src/components';
import useArtWork from '../../src/hooks/use-art-work';
import { Box, Container } from '@mui/material';
import { getImageUrl } from '../../src/utils/helpers';

const ArtWorkDetail: NextPage = () => {
  const { isLoading, isError, data, isFetching, isReady } = useArtWork();
  if (isError) return <ErrorScreen />;
  if (isLoading || isFetching || !isReady) return <LoadingScreen />;
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
        <Container maxWidth="lg">
          <DetailedCard
            image={getImageUrl(data.data.image_id)}
            title={data.data.title}
            dimensions={data.data.dimensions}
            placeOfOrigin={data.data.place_of_origin}
            artworkTypeTitle={data.data.artwork_type_title}
            creditLine={data.data.credit_line}
          />
        </Container>
      </Box>
    </>
  );
};

export default ArtWorkDetail;
