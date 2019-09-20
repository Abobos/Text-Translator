import axios from '../config/axios';
import { GET_LANGUAGES } from './actionType';

const { API_KEY } = process.env;

export const getLanguages = async () => {
  try {
    const response = await axios.get('/languages', {
      params: {
        key: API_KEY,
        target: 'en',
        model: 'base',
      },
    });
    const { languages } = response.data.data;
    return {
      type: GET_LANGUAGES,
      language: [],
    };
  } catch (error) {
    console.log('error: ', error);
  }
};
