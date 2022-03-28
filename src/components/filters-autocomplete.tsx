import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

declare interface IFiltersAutocomplete {
  options: string[];
  onChange: (_: any, options: string[]) => void;
}

const FiltersAutocomplete = ({ options, onChange }: IFiltersAutocomplete) => {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={options}
      filterSelectedOptions
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          color="secondary"
          label="Filters"
          placeholder="Select one or more filters"
        />
      )}
    />
  );
};

export default FiltersAutocomplete;
