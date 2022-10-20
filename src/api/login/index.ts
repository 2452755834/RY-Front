import request from '../../request';
import { AxiosPromise } from 'axios'
export default {
  login(data = {}): AxiosPromise<any> {
    return request.post('control/authJson/login', data)
  },
  test(data = {}): AxiosPromise<any> {
    return request.post('login', data)
  }
}
