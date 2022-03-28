import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import NavBar from './navbar';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppLayout;
