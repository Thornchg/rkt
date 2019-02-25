// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/common.less'
import './axios'
Vue.config.productionTip = false;

router.beforeEach(function (to,from,next) {
  if (!store.state.user.isLogin&&window.sessionStorage.isLogin==='true'){
    let userData=JSON.parse(window.sessionStorage.userData);
    store.commit("loginSuccess",userData);
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
