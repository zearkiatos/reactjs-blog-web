require('dotenv').config();

const isDevelop = process.env.ENVIRONMENT === 'develop';
const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    DEVELOP: isDevelop,
    REDUXBLOG_API_BASE_URL: process.env.REACT_APP_REDUXBLOG_API_BASE_URL,
    REDUXBLOG_API_KEY: process.env.REACT_APP_REDUXBLOG_API_KEY
};

export default config;