import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
// 导入全局样式表
import './assets/css/global.css'
import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';
import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'
import axios from 'axios'


const app = createApp(App);
// 挂载axios到vue原型上
app.config.globalProperties.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:5222';
app.use(ElementPlus,router).mount("#app");