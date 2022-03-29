import React from 'react';
import { scrollToTop } from '../utils/helpers';
import useScrollToTop from '../hooks/use-scroll-to-top';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';

const ScrollToTopButton = () => {
  const { visible } = useScrollToTop();
  return (
    <>
      {visible && (
        <IconButton
          color="secondary"
          sx={{
            zIndex: 2,
            position: 'fixed',
            right: 20,
            bottom: 80,
          }}
          onClick={() => scrollToTop(true)}
        >
          <ArrowCircleUpIcon sx={{ fontSize: 50 }} />
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
