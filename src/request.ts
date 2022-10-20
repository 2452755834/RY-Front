import { AxiosPromise, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios'
import { Message, ElLoading, ElMessage } from 'element-plus'
import { useStore } from 'vuex';
import store from './store';
const service:AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 5000
})
service.interceptors.request.use((config:AxiosRequestConfig) => {
  const currentUser = store.state.user.currentUser
  let Authorization = 'Bearer '
  if (currentUser && currentUser.token) {
    Authorization += currentUser.token
  }
  config.headers = { ...config.headers, Authorization }

  return config
}, error => {
  return Promise.reject(error);
})
service.interceptors.response.use((res:AxiosResponse<any, any>):any => {
  // if (res.status === 200) {
  // }
  return res.data
}, (error:any) => {
  console.log(error);

  const errorData = error.response.data
  ElMessage.error(errorData.message)

  Promise.reject(error)
})
export default {
  request(data:any):AxiosPromise<any> {
    const reqData = data.data || {};
    // // 支持表达式作为域名解析
    // data.url = utils.parseUrl(data.url);
    // // 统一拼接域名接口
    // if (data.url.indexOf('http') == -1) {
    //   data.url = context.manage + data.url;
    // }
    const requestData = {
      url: data.url,
      data: reqData,
      method: data.method || 'GET',
      params: data.params || {},
      onUploadProgress: data.onUploadProgress || null,
      headers: data.headers || '',
      responseType: data.responseType || 'json',
      timeout: data.timeout || axios.defaults.timeout
    };
    return service(requestData);
  },
  download(url:string): AxiosPromise<any> {
    return this.request({ url, responseType: 'arraybuffer' });
  },
  get(url:string, params:any, type = 'json'): AxiosPromise<any> {
    return this.request({ url, responseType: type, params });
  },
  post(url:string, data:any, responseType = 'json'): AxiosPromise<any> {
    return this.request({
      url,
      data,
      method: 'POST',
      responseType: responseType
    });
  }
}
