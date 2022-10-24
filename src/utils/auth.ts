const TokenKey = 'Admin-Token';
/*
  *@description 获取token
  *@param {  } []
  *@author 卢少川
  *@return
  *@date 2022/10/24 17:28:39
 */
export function getToken():string|null {
  return sessionStorage.getItem(TokenKey)
}
/*
  *@description 设置token
  *@param {  } []
  *@author 卢少川
  *@return
  *@date 2022/10/24 17:28:47
 */
export function setToken(token:string):void {
  sessionStorage.setItem(TokenKey, token)
}
/*
  *@description 删除token
  *@param {  } []
  *@author 卢少川
  *@return
  *@date 2022/10/24 17:29:40
 */
export function removeToken():void {
  sessionStorage.removeItem(TokenKey)
}
