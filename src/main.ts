import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import SvgIcon from '@/components/SvgIcon/index.vue';
import '@/assets/styles/index.scss'; // global css
const app = createApp(App)
app.use(router);
app.use(store);
app.use(ElementPlus);
app.component('svg-icon', SvgIcon);
app.mount('#app')
// 全局引入svg
const importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('@/assets/icons/svg/', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

