import { AxiosPromise, AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
import axios from 'axios'
import { Message, ElLoading, ElMessage } from 'element-plus'
import { useStore } from 'vuex';
import store from './store';
// 定义统一的响应体数据
type Result<T>={
  code: number,
  message: string,
  data: T
}
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
  request(data:AxiosRequestConfig):Promise<AxiosResponse> {
    const reqData = data.data || {};
    // // 支持表达式作为域名解析
    // data.url = utils.parseUrl(data.url);
    // // 统一拼接域名接口
    // if (data.url.indexOf('http') == -1) {
    //   data.url = context.manage + data.url;
    // }
    const requestData:AxiosRequestConfig = {
      url: data.url,
      data: reqData,
      method: data.method || 'GET',
      params: data.params || {},
      onUploadProgress: data.onUploadProgress || undefined,
      headers: data.headers || undefined,
      responseType: data.responseType || 'json',
      timeout: data.timeout || axios.defaults.timeout
    };
    return service.request(requestData);
  },
  // download(url:string): AxiosPromise<any> {
  //   return this.request({ url, responseType: 'arraybuffer' });
  // },
  get<T, R>(url:string, params:T): Promise<AxiosResponse<Result<R>>> {
    return this.request({ url, params });
  },
  post<T, R>(url:string, data:T, responseType:ResponseType = 'json'): Promise<AxiosResponse<Result<R>>> {
    return this.request({
      url,
      data,
      method: 'POST',
      responseType: responseType
    });
  }
}
