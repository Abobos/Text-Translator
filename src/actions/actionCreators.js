import axios from '../config/axios';
import { GET_LANGUAGES, TRANSLATE_TEXT, ERROR } from './actionType';

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

export const translateText = (
  text,
  sourceLanguageCode,
  targetLanguageCode
) => async dispatch => {
  dispatch({
    type: 'Receiving Data',
  });
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: text,
        source: sourceLanguageCode,
        target: targetLanguageCode,
        format: 'text',
      },
    });
    const {
      translations: [translatedText],
    } = response.data.data;
    dispatch({
      type: 'Received Data',
    });
    dispatch({
      type: TRANSLATE_TEXT,
      text: { ...translatedText },
    });
  } catch (error) {
    dispatch({
      type: 'Received Data',
    });
    dispatch({
      type: ERROR,
      error: 'Something went wrong',
    });
  }
};
