import React from 'react';
import { Box, Paper } from '@mui/material';
import Image from 'next/image';
import useImageError from '../../hooks/use-image-error';
import DetailedTable from './detailed-table';

interface IDetailedCard {
  image: string;
  title: string;
  dimensions: string;
  placeOfOrigin: string;
  artworkTypeTitle: string;
  creditLine: string;
}

const DetailedCard = ({
  image,
  title,
  dimensions,
  placeOfOrigin,
  artworkTypeTitle,
  creditLine,
}: IDetailedCard) => {
  const items = [
    { label: 'Title', value: title },
    { label: 'Dimensions', value: dimensions },
    { label: 'Place Of Origin', value: placeOfOrigin },
    { label: 'Artwork Type', value: artworkTypeTitle },
    { label: 'Credit Line', value: creditLine },
  ];
  const { imgError, handleImgError } = useImageError();
  return (
    <Paper sx={{ borderRadius: 2 }} elevation={3}>
      <Box sx={{ p: 2 }}>
        <Image
          style={{
            borderRadius: 8,
          }}
          src={
            imgError
              ? 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
              : image
          }
          alt="Picture of the author"
          onError={handleImgError}
          width={1200}
          height={600}
          layout="responsive"
        />
        <DetailedTable items={items} />
      </Box>
    </Paper>
  );
};

export default DetailedCard;
