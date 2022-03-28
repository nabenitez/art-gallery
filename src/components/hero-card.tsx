import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material/';
import { useRouter } from 'next/router';
import useImageError from '../../src/hooks/use-image-error';

interface IHeroCardProps {
  id: string;
  title: string;
  artistDisplay: string;
  image: string;
  fetching: boolean;
  categories: string[];
}

/** Render data about an art work in Card format. Also allow dynamic routing*/
const HeroCard = ({
  id = '',
  title = '',
  artistDisplay = '',
  image,
  fetching,
  categories,
}: IHeroCardProps) => {
  const router = useRouter();

  const { imgError, handleImgError } = useImageError();

  const handleOnClick = () => router.push(`/artworks/${id}`);

  return (
    <Card>
      <CardActionArea
        onClick={handleOnClick}
        disabled={fetching}
        sx={{ opacity: fetching ? 0.6 : 1 }}
      >
        <CardMedia
          component="img"
          height="140"
          onError={handleImgError}
          image={
            fetching || imgError
              ? 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
              : image
          }
          alt={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            noWrap
            variant="h6"
            component="div"
            color="secondary.main"
          >
            {title}
          </Typography>
          <Typography
            sx={{ h: 20 }}
            noWrap
            variant="body2"
            color="text.secondary"
          >
            {artistDisplay}
          </Typography>
          <Divider variant="middle" sx={{ mt: 2 }} />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2 }}
            sx={{
              py: 1,
              overflowX: 'scroll',
              '&::-webkit-scrollbar': {
                width: 1,
                height: 3,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'primary.dark',
                borderRadius: '10px',
              },
            }}
          >
            {categories &&
              categories.map((category, index) => {
                return <Chip key={index} color="secondary" label={category} />;
              })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
