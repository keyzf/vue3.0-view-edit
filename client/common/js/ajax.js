import Axios from 'axios';
import store from 'store';
//
const headers = {
  'Content-Type': 'application/json; charset=utf-8'
};


//
const axios = Axios.create({
  baseURL: '',
  withCredentials: true,
  timeout: 10000,
  headers: headers,
  xsrfCookieName: null
});


//
axios.interceptors.request.use(config => {
  // 初始化时无token, 追加token
  const currentToken = store.get('TOKEN');
  if (currentToken) {
    config.headers.token = currentToken;
  }
  return config;
});


//
axios.interceptors.response.use(res => {
  return Promise.resolve(res.data);
}, res => {
  if (res.response) {
    // 错误提示
    return Promise.reject({ msg: res.response.statusText });
  } else {
    return Promise.reject({ msg: '网络错误，请稍后再试。' });
  }
})

//
export default axios;
