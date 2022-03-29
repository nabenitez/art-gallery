/**
 *
 * @param identifier
 * @returns image url based on identifier value
 */
export const getImageUrl = (identifier: string): string =>
  `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;

/**
 *
 * @param filters strings array with keys to filter data
 * @returns
 */
export const getFilterQuery = (filters: string[], query?: string) => {
  const getConditions = () =>
    filters.map((filter) => ({
      match: {
        artwork_type_title: filter,
      },
    }));
  const getQueryBase = (conditions: object[]) => ({
    q: query || '',
    query: {
      bool: {
        must: [
          {
            bool: {
              should: conditions,
            },
          },
        ],
      },
    },
  });

  const composedQuery = getQueryBase(getConditions());
  return encodeURIComponent(JSON.stringify(composedQuery));
};

// based on https://github.com/HermanNygaard/react-scroll-to-top/blob/master/src/index.tsx
export const scrollToTop = (smooth: boolean = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
};
