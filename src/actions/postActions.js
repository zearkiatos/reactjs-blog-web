import axios from "axios";
import { POST_TYPES } from "../types";
import config from "../config";

const fetchPosts = () => {
  const request = axios.get(
    `${config.REDUXBLOG_API_BASE_URL}/api/posts?key=${config.REDUXBLOG_API_KEY}`
  );

  return {
    type: POST_TYPES.FETCH_POSTS,
    payload: request,
  };
};

const createPost = (properties) => {
  const request = axios.post(
    `${config.REDUXBLOG_API_BASE_URL}/api/posts?key=${config.REDUXBLOG_API_KEY}`,
    properties
  );

  return {
    type: POST_TYPES.CREATE_POST,
    payload: request,
  };
};

const fetchPost = (id) => {
  const request = axios.get(
    `${config.REDUXBLOG_API_BASE_URL}/api/posts/${id}?key=${config.REDUXBLOG_API_KEY}`
  );

  return {
    type: POST_TYPES.FETCH_POST,
    payload: request,
  };
};

const deletePost = (id) => {
  const request = axios.delete(
    `${config.REDUXBLOG_API_BASE_URL}/api/posts/${id}?key=${config.REDUXBLOG_API_KEY}`
  );

  return {
    type: POST_TYPES.DELETE_POST,
    payload: request,
  };
};

export default {
  fetchPosts,
  createPost,
  fetchPost,
  deletePost
};
