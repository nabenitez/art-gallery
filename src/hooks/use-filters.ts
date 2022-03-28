import { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const handleOnChangeFilters = (_: any, options: string[]) => {
    setFilters(options);
  };

  return { filters, handleOnChangeFilters };
};

export default useFilters;
