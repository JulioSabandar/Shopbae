import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:5000'
export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: [],
    cart: null
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
        commit('SET_ISLOGGEDIN', true);
        localStorage.setItem('access_token', response.data.access_token);
        swal("Welcome!", "You are logged in!", "success");
      })
      .catch(err =>{
        if(err.response.status == 400){
          swal("Error!", 'Incorrect Email/Password', "error");
        }
        else{
          swal("Error!", err.message, "error");
        }
      })
    },
    register({ commit }, payload){
      return axios({
        url: url + '/register',
        method: 'post',
        data: {
          email: payload.email,
          username: payload.username,
          password: payload.password
        }
      })
      .then(response=>{
        console.log(response)
        swal("Success!", "You can now log in!", "success");
      })
      .catch(err =>{
        if(err.response.status == 400){
          swal("Error!", 'Incorrect Email/Password', "error");
        }
        else{
          swal("Error!", err.message, "error");
        }
      })
    },
    getProducts({ commit }){
      axios({
        url: url + '/product',
        method: 'get'
      })
      .then(response=>{
        commit('SET_PRODUCTS', response.data.products);
      })
      .catch(err=>{
        swal("Error!", err.message, "error");
      })
    },
    addToCart({ commit }, payload){
      axios({
        url: url + '/product/cart',
        method: 'post',
        data: {
          ProductId: payload.id
        },
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        console.log(response);
        swal("Success!", `${payload.name} added to cart`, "success");
      })
      .catch(err=>{
        swal("Error!", err.message, "error");
      })
    }
  },
  modules: {
  }
});
