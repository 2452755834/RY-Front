import request from '../../request';
const mapping = '/user/'

export function login(data:any) {
  return request.post(mapping + 'login', data)
}
