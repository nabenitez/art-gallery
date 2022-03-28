import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import useImageError from '../hooks/use-image-error';

const ErrorScreen = () => {
  const { imgError, handleImgError } = useImageError();
  return !imgError ? (
    <Box
      sx={{
        width: '40%',
        margin: '15vh auto',
      }}
    >
      <Image
        style={{
          borderRadius: 8,
        }}
        src={
          'https://www.laborum.cl/candidate/static/media/algo-no-salio-bien.d1d4c9ba.png'
        }
        alt="Error has ocurred"
        onError={handleImgError}
        width={550}
        height={350}
        layout="responsive"
      />
      <Typography component="div" variant="h6" color="secondary">
        Ooops. Something wen&apos;t wrong, please refresh the page or try again
        later.
      </Typography>
    </Box>
  ) : null;
};

export default ErrorScreen;
