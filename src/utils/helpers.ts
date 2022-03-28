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
export const getFilterQuery = (filters: string[]) => {
  const getConditions = () =>
    filters.map((filter) => ({
      match: {
        artwork_type_title: filter,
      },
    }));
  const getQueryBase = (conditions: object[]) => ({
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
