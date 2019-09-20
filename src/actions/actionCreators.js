import axios from '../config/axios';
import { GET_LANGUAGES, ERROR } from './actionType';

const { API_KEY } = process.env;

export const getLanguages = () => async dispatch => {
  try {
    const response = await axios.get('/languages', {
      params: {
        key: API_KEY,
        target: 'en',
        model: 'base',
      },
    });
    const { languages } = response.data.data;
    dispatch({
      type: GET_LANGUAGES,
      languages,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      error: 'Something went wrong',
    });
  }
};
