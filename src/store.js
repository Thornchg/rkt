// import Vue from 'vue'
// import Vuex from 'vuex'

Vue.use(Vuex);

function saveUser(state){
  window.sessionStorage.setItem("isLogin",state.isLogin);
  window.sessionStorage.setItem("userData",JSON.stringify(state.data));
}
let user={
  state: {
    isLogin:false,
    data:{
      email:'',
      nickName:'隐辰丶'
    }

  },
  mutations: {
    loginSuccess(state,user){
      state.isLogin=true;
      if (user){
        state.data=user;
      }
      saveUser(state);
    },
    logout(state){
      state.isLogin=false;
      state.data={};
      window.sessionStorage.removeItem("userData");
      window.sessionStorage.isLogin=false;
    }

  },
  actions: {

  }
};
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    user
  }
})
