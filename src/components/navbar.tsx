import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
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
              flexGrow: 1,
            }}
          >
            Art Gallery
          </Typography>
          {router.pathname !== '/' && (
            <IconButton color="secondary" onClick={handleOnClick}>
              <ViewComfyIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
