/**
 *
 * @param identifier
 * @returns image url based on identifier value
 */
export const getImageUrl = (identifier: string): string =>
  `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;
