import React from 'react';
import { TextField, IconButton, InputAdornment, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface ISearchField {
  isFetching: boolean;
  searchText: string;
  setSearchText: (value: string) => void;
}

/** SearchField allows to receive an input and take that value to make a search */
const SearchField = ({
  isFetching,
  searchText,
  setSearchText,
}: ISearchField) => {
  const handleCleanSearch = () => {
    setSearchText('');
  };
  return (
    <TextField
      value={searchText}
      fullWidth
      disabled={isFetching}
      autoComplete="off"
      onChange={(e) => setSearchText(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon fontSize="small" color="action">
              <SearchIcon />
            </SvgIcon>
          </InputAdornment>
        ),
        endAdornment: (
          <IconButton
            onClick={handleCleanSearch}
            color="secondary"
            aria-label="search art work"
          >
            <SvgIcon fontSize="small" color="secondary">
              <ClearIcon />
            </SvgIcon>
          </IconButton>
        ),
      }}
      color="secondary"
      placeholder="Search art work"
      variant="outlined"
    />
  );
};

export default SearchField;
