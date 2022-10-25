import { AxiosPromise, AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType, AxiosInterceptorManager } from 'axios';
import axios from 'axios'
import { Message, ElLoading, ElMessage } from 'element-plus'
import { getToken } from './utils/auth';
import store from './store';
// 定义统一的响应体数据
type Result<T=any>={
  code: number,
  message: string,
  state:boolean,
  data: T
}
const service:AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:7797/',
  timeout: 5000
})
service.interceptors.request.use((config:AxiosRequestConfig) => {
  // 添加token
  if (getToken() && config.headers) {
    config.headers['Authorization'] = `Bearer ${getToken()}`
  }

  return config
}, error => {
  return Promise.reject(error);
})
service.interceptors.response.use((res:AxiosResponse<Result>) => {
  // if (res.status === 200) {
  // }
  if (!res.data.state) {
    ElMessage.error(res.data.message)
  }
  return Promise.resolve(res.data)
}, (error) => {
  console.log('err' + error);
  let { message } = error;
  if (message === 'Network Error') {
    message = '后端接口连接异常';
  } else if (message.includes('timeout')) {
    message = '系统接口请求超时';
  } else if (message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常';
  }
  ElMessage({
    message: message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
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
