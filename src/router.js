// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './pages/Index.vue'
import store from './store'

Vue.use(VueRouter);

let vueRouter= new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            children:[
                {
                    path:'',
                    name: 'home',
                    component:Index
                },
                {
                    path:'paperList/:questionTypeName/:paperTypeName',
                    component:()=>import('./pages/PaperList.vue'),
                    props: true
                },{
                    path:'examRecord/:questionTypeName',
                    component:()=>import('./pages/ExamRecord.vue'),
                    props:true
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }, {
            path: '/exam/:id',
            name: 'exam',
            component: () => import('./views/Exam.vue'),
            props: true
        },  {
            path: '/examResult/:id',
            name: 'examResult',
            component: () => import('./views/ExamResult.vue'),
            props: true
        }, {
            path: '/404',
            name: '404',
            component: () => import('./views/404.vue')
        }
    ]
})

vueRouter.beforeEach((to, from, next) => {
    console.log('beforEach')
    HeyUI.$LoadingBar.start();


    /*if (to.meta && to.meta.title) {
        document.title = to.meta.title + ' - 管理应用';
    } else {
        document.title = '管理系统';
    }*/
    next();
});
vueRouter.afterEach(() => {
    HeyUI.$LoadingBar.success();
    // document.documentElement.scrollTop = 0;
    // document.body.scrollTop = 0;
});
export default vueRouter;
