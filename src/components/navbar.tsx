import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import React from 'react';

const NavBar = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography
            onClick={handleOnClick}
            variant="h6"
            component="div"
            color="secondary"
            sx={{
              fontStyle: 'italic',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Art Gallery
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
