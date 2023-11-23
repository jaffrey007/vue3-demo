// import { useWindowScroll } from "@vueuse/core";
import { createRouter,createWebHistory } from "vue-router";
// before you use the component in router array,you need to import it from .vue file
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/HomePage.vue';
// route rules must be defined before router instance creation

const routes=[
    {
        path:'/',redirect: '/login/'
     
    },
    {
        path:'/login',
        name: LoginPage,
        component: LoginPage,
    },
    {
        path:'/home',
        name: HomePage,
        component: HomePage,
    },

]


const router = createRouter({
    history:createWebHistory(),
    routes
})
// 挂载路由导航守卫
// router.beforeEach((to,from,next) =>{
//     // to将要访问路径；from：从哪个路径跳转 next:是个一个函数，表示放行
//     if(to.path == './login') return next();
//     const tokenStr= window.sessionStorage.getItem('token')
//     if(!tokenStr) return next('./login')
//     next()
// })
export default router;
