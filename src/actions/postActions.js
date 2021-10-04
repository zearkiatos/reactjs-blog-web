import axios from 'axios';
import { POST_TYPES } from '../types';
import config from '../config';

const fetchPosts = () => {
    const request = axios.get(`${config.REDUXBLOG_API_BASE_URL}/api/posts?key=${config.REDUXBLOG_API_KEY}`);
   return  {
    type: POST_TYPES.FETCH_POSTS,
    payload: request
   };
};

export default {
    fetchPosts
}