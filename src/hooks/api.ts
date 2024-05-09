import axios from 'axios';

// Replace 'API_ENDPOINT' with the actual endpoint of your API
const API_ENDPOINT = 'https://api.deezer.com/user/2529';

export const searchSongs = async (query: string) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching songs:', error);
    throw error;
  }
};