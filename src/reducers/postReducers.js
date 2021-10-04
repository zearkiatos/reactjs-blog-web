import {  POST_TYPES } from '../types'
const INITIAL_STATE = {
    all: [],
    post: null
};

const postReducers = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_TYPES.FETCH_POSTS:

    default:
      return state;
  }
};

export default postReducers;
