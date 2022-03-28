import { useState } from 'react';

const useImageError = () => {
  const [imgError, setImgError] = useState(false);
  const handleImgError = () => {
    setImgError(true);
  };
  return { imgError, handleImgError };
};

export default useImageError;
