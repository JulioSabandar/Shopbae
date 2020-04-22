import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:5000'
export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: []
  },
  mutations: {
    SET_ISLOGGEDIN(state, payload){
      state.isLoggedIn = payload;
      console.log(state.isLoggedIn);
    },
    SET_PRODUCTS(state, payload){
      state.products = payload;
    }
  },
  actions: {
    login({ commit }, payload){
      return axios({
        url: url + '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(response=>{
        console.log(response)
        console.log('logged in')
        commit('SET_ISLOGGEDIN', true);
        localStorage.setItem('access_token', response.data.access_token);
        swal("Welcome!", "You are logged in!", "success");
      })
      .catch(err =>{
        console.log(err.response.status)
        if(err.response.status == 400){
          swal("Error!", 'Incorrect Email/Password', "success");
        }
        else{
          swal("Error!", err.message, "success");
        }
        console.log(err);
      })
    },
    getProducts({ commit }){
      console.log('ayyyydd')
      axios({
        url: url + '/product',
        method: 'get'
      })
      .then(response=>{
        commit('SET_PRODUCTS', response.data.products);
      })
      .catch(err=>{
        swal("Error!", err.message, "success");
      })
    },
  },
  modules: {
  }
});
