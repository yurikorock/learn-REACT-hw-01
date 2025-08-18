import axios from 'axios';
const ACCESS_KEY = 'wI1w2RVgUvjuJb0J1gHe4ygdTOtGE6Jz3bmKWX5CLQc';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImagesByQuery = async (query) => {
  const response = await axios.get('/search/photos', {
    params: { query: query },
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  return response.data.results;
};
