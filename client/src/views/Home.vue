<template>
  <div class="home">
    <div class="container">
      <div class="card" v-for="product in products">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="product.image_url" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h2>{{product.name}} </h2>
            <h4>{{product.price}} USD </h4>
          </div>
          <b-button v-if="isLoggedIn" type="is-success" expanded>Add To Cart</b-button>
          <b-button v-if="!isLoggedIn" type="is-success" expanded disabled>Add To Cart</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created(){
    this.loadProducts();
  },
  computed: {
    products(){
      return this.$store.state.products;
    },
    isLoggedIn(){
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    loadProducts: function(){
      this.$store.dispatch('getProducts');
    },
  }
};
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }
  
</style>
