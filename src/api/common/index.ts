import request from '../../request';
import { AxiosPromise } from 'axios'
export default {
  /*
    *@Description: 获取平台信息
    *@author: 卢少川
    *@param: {  } []  =>
    *@return:
    *@Date: 2022-08-05 17:08:23
   */
  getTenantByCode(data:any):AxiosPromise<any> {
    return request.get('uc/tenantManage/v1/getTenantByCode', data)
  },
  /*
    *@Description: 获取用户菜单信息
    *@author: 卢少川
    *@param: {  } []  =>
    *@return:
    *@Date: 2022-08-05 17:09:56
   */
  getCurrentUserMenu(data:any):AxiosPromise<any> {
    return request.get('sys/sysMenu/v1/getCurrentUserMenu', data)
  }
}
