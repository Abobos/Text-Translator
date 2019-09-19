import axios from '../config/axios';

const { API_KEY } = process.env;

export const getLanguages = async () => {
  try {
    const response = await axios.get('/language/translate/v2/detect', {
      params: {
        key: API_KEY,
        q: 'sfjaskj',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log('error: ', error);
  }
};
