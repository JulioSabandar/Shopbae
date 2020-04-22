import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:5000'
export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false,
    products: [],
    cart: [],
    totalPrice: null
  },
  mutations: {
    SET_USER(state, payload){
      state.user = payload;
    },
    SET_ISLOGGEDIN(state, payload){
      state.isLoggedIn = payload;
    },
    SET_PRODUCTS(state, payload){
      state.products = payload;
    },
    SET_CART(state, payload){
      state.cart = payload;
    },
    SET_TOTALPRICE(state, payload){
      state.totalPrice = payload;
    }
  },
  actions: {
    getUserData({commit}, payload){
      return axios({
        url: url + '/user',
        method: 'get',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        commit('SET_USER', response.data.customer);
      })
      .catch(err=>{
        console.log(err);
      })

    },
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
        localStorage.setItem('username', response.data.customer.username);
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
    },
    getCart({ commit }){
      axios({
        url: url + '/product/cart',
        method: 'get',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        let totalPrice = 0;
        let orders = response.data.orders;
        for(let i=0; i<orders.length; i++){
          totalPrice += (orders[i].amount * orders[i].Product.price)
        }
        commit('SET_CART', orders);
        commit('SET_TOTALPRICE', totalPrice);
      })
      .catch(err=>{
        swal("Error!", err.message, "error");
      })
    },
    removeItem({commit}, payload){
      axios({
        url: url + '/product/cart/' + payload.id,
        method: 'delete',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        swal(` ${payload.Product.name} removed from cart!`, {
          icon: "success",
        });
      })
      .catch(err=>{
        swal("Error!", 'Cannot remove item', "error");
      })
    },
    removeAll({commit}){
      axios({
        url: url + '/product/cart',
        method: 'delete',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        swal(`All Items Removed!`, {
          icon: "success",
        });
      })
      .catch(err=>{
        swal("Error!", 'Cannot remove item(s)', "error");
      })
    },
    checkout({commit}){
      axios({
        url: url + '/product/checkout',
        method: 'post',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        swal(`Your purchase has been processed!`, {
          icon: "success",
        });
      })
      .catch(err=>{
        swal("Error!", 'Cannot remove item(s)', "error");
      })
    }
  },
  modules: {
  }
});
