import { ActionContext } from 'vuex'
interface userState{
  currentUser:CurrentUser
}
interface CurrentUser{
  account:string,
  userId:string,
  username:string,
  token:string,
  [propName:string]:string

}
const state = {
//  登录接口返回用户信息
  currentUser: {}
}
const mutations = {
  // 设置菜单列表
  setCurrentUser(state:userState, val:CurrentUser):void {
    state.currentUser = val
  }
}
const actions = {

}
export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
