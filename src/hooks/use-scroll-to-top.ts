import { useState, useEffect } from 'react';

// based on https://github.com/HermanNygaard/react-scroll-to-top/blob/master/src/index.tsx
const useScrollToTop = () => {
  const top = 20;
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };
  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    // Remove listener on unmount
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return { visible };
};

export default useScrollToTop;
