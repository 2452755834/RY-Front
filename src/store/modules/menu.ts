import commonApi from '@/api/common'
import { ActionContext } from 'vuex'
// 菜单模块类型声明
// 菜单项类型
interface MenuItem{
  id:string,
  name:string,
  children:Array<MenuItem>,
  [propName:string]:string|Array<MenuItem>|number
}
// 菜单数组类型
interface MenuStateType{
  menuList:Array<MenuItem>
}
const state = {
  // 菜单列表
  menuList: []
}
const mutations = {
  // 设置菜单列表
  setMenuList(state:MenuStateType, val:Array<MenuItem>):void {
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
  namespaced: true,
  state,
  mutations,
  actions
})
