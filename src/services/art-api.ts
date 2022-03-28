import axios from 'axios';
const API_URL: string = process.env.NEXT_PUBLIC_ART_API_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export const fetchArtWorks = async (page: number = 1) => {
  const { data } = await axiosClient.get(`?page=${page}`);
  return data;
};

export const searchArtWorks = async (query: string, page: number = 1) => {
  const fields =
    'id,title,image_id,exhibition_history,category_titles,artist_display';
  const { data } = await axiosClient.get(
    `/search?q=${query}?page=${page}&limit=12&fields=${fields}`,
  );
  return data;
};

export const filterArtWorks = async (query: string, page: number = 1) => {
  const { data } = await axiosClient.get(
    `/search?page=${page}&limit=12&fields=id,title,image_id,exhibition_history,category_titles,artist_display&params=${query}`,
  );
  return data;
};

export const getArtWorkById = async (id: string) => {
  const { data } = await axiosClient.get(`/${id}`);
  return data;
};
