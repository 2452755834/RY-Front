import { createStore, Module } from 'vuex'
const context = require.context('./modules', true, /\.ts$/)
interface MenuModules{
  [prop:string]:Module<any, any>

}
const modules:MenuModules = {}
context.keys().forEach(key => {
  const utilName = key.substring(key.lastIndexOf('\/') + 1, key.lastIndexOf('.'))
  const util = context(key).default ? context(key).default : {}
  modules[utilName] = util
})
export default createStore({

  modules
})
