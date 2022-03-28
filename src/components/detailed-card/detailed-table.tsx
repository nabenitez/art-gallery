import React from 'react';
import { Divider, Grid, List, ListItem, Typography } from '@mui/material';

interface IDetailedTable {
  items: { label: string; value: string }[];
}

const DetailedTable = ({ items }: IDetailedTable) => {
  return (
    <List sx={{ mt: 2, px: 2, bgcolor: 'background.paper' }}>
      {items.map((item) => (
        <>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <Grid container>
              <Grid item xs={12} sm={3}>
                <Typography
                  color="secondary"
                  component="div"
                  variant="subtitle1"
                >
                  {item.label}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography component="div" variant="body2">
                  {item.value}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>
  );
};

export default DetailedTable;
