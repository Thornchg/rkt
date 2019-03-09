// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/common.less'
import './axios-config'

Vue.config.productionTip = false;

router.beforeEach(function (to, from, next) {
    if (!store.state.user.isLogin && window.sessionStorage.isLogin === 'true') {
        let userData = JSON.parse(window.sessionStorage.userData);
        store.commit("loginSuccess", userData);
    }
    next();
});

if (!store.state.user.isLogin) {
    axios.get('/isAuthenticated')
        .then(response => {
            // console.log(response.data)
            // console.log(response)
            if (response.data.status && response.data().status === 401)
                return;
            store.commit('loginSuccess', response.data);
        })
        .catch(error => {
            // console.log(error.response)
        })
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
