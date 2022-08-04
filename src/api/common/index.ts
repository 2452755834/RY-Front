import request from '../../request';
import { AxiosPromise } from 'axios'

/*
  *@Description: 获取平台信息
  *@author: 卢少川
  *@param: {  } []  =>
  *@return:
  *@Date: 2022-08-04 10:32:58
 */
export default {
  getTenantByCode(data:any): AxiosPromise<any> {
    return request.get('uc/tenantManage/v1/getTenantByCode', data)
  }
}
