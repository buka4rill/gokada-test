import { GET_POSTS, POSTS_ERROR, SET_LOADING } from './types';
import axios from 'axios';

export const getPosts = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
