import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import useImageError from '../hooks/use-image-error';

const ErrorScreen = () => {
  const { imgError, handleImgError } = useImageError();
  return !imgError ? (
    <Box
      sx={{
        width: '60%',
        margin: '15vh auto',
      }}
    >
      <Image
        style={{
          borderRadius: 8,
        }}
        src={
          'https://i.pinimg.com/originals/b8/b8/f7/b8b8f787c454cf1ded2d9d870707ed96.png'
        }
        alt="Error has ocurred"
        onError={handleImgError}
        width={800}
        height={600}
        layout="responsive"
      />
    </Box>
  ) : null;
};

export default ErrorScreen;
