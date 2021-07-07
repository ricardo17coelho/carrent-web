import axios from 'axios';
// import store from '@/store';
// import router from '@/router';

// create axios
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api base_url
  // baseURL: 'http://localhost:8000/api/',
  timeout: 50000, // timeout,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

const err = error => {
  const { status, data } = error.response;
  const { errors } = data;
  let message = [];
  for (let field in errors) {
    message.push(errors[field]);
  }
  switch (status) {
    case 400:
      // SHOW_SNACKBAR error, text = 'Bad Request ' + data.message
      break;

    case 422:
      // SHOW_SNACKBAR error, text = message

      break;

    case 401:
      // 'AUTH_FAIELD'
      break;

    case 403:
      // 'ACESS_DENIED'
      // router .push({ name: '403' });
      break;

    case 500:
      // 'SERVER_ERROR'
      // router .push({ name: '500' });
      break;

    default:
      break;
  }

  return Promise.reject(error);
};

// request interceptor

service.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = '*';
//   config.headers['Content-Type'] = 'application/json';
  return config;
}, err);

// response interceptor

service.interceptors.response.use(({ data, config, status }) => {
  if (['put', 'post', 'delete', 'patch'].includes(config.method) && data.meta) {
    // can set here Global status success
  }
  if (data.error !== undefined) {
    // API_FAILED error is missing
  }

  return data;
}, err);

export default service;