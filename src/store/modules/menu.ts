import commonApi from '@/api/common'
import { ActionContext } from 'vuex'
// 菜单模块类型声明
interface MenuStateType{
  menuList:Array<any>
}
const state = {
  // 菜单列表
  menuList: []
}
const mutations = {
  // 设置菜单列表
  setMenuList(state:MenuStateType, val:Array<any>):void {
    state.menuList = val
  }
}
const actions = {
  /*
    *@Description: 获取菜单列表
    *@author: 卢少川
    *@param: {  } []  =>
    *@return:
    *@Date: 2022-08-05 17:22:12
   */
  getMenuListAction({ commit }:ActionContext<MenuStateType, MenuStateType>):void {
    const data = {
      menuAlias: 'manage_menu'
    }
    commonApi.getCurrentUserMenu(data).then((res:any) => {
      commit('setMenuList', res.value)
    })
  }
}
export default ({
  namespace: true,
  state,
  mutations,
  actions
})
