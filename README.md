This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is an Art Gallery application which shows thousands of works available in the Art Institute of Chicago.

## Features

- Gallery page with hero cards grid
- Detailed page with dynamic routing
- Search
- Filters
- Search and filters (both works at same time)
- Loading indicator
- Error handle
- Custom hooks

## Technologies

- NextJS (TypeScript)
- Material UI 5
- React Query
- Husky
- Eslint
- Prettier

## API

The app consume an API which belongs to [Art Institute of Chicago API](https://api.artic.edu/docs/#quick-start). This API have enough complexity to create different behaviors and views in the web app.

**Disclaimer:** The API have a problem with the total pages when search and/or filter, then an error is throw, it's handled but could be an issue if you want to go from the first page to the last one (with large number of total pages). Anyway it's works when you change from page 1 and next page is in [2, 80] interval.

## Live demo

The app can be visited at [deployed version](https://art-gallery-flax.vercel.app/)

## Local setup

First, install the dependencies:

````bash
npm install
# or
yarn install

Then, run the development server:

```bash
npm run dev
# or
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
