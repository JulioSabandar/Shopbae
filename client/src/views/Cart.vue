<template>
    <div>

        <div class="credit_dashboard">
            <hr>
                <h1>
                    Your Credits: {{user.credit}} USD
                </h1>
                <br>
                <topupButton @topup="topup">
                </topupButton>

            <hr>
        </div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th align="center" scope="col">Item</th>
                    <th align="center" scope="col">Image</th>
                    <th align="center" scope="col">Quantity</th>
                    <th align="center" scope="col">Price</th>
                    <th align="center" scope="col"> Total Price</th>
                    <th align="center" scope="col"> Actions</th>
                </tr>
            </thead>
            <tbody v-if="cart.length > 0">
                <tr v-for="product in cart" >
                    <td valign="middle" align="center">{{product.Product.name}}</td>
                    <td align="center">
                        <img :src="product.Product.image_url" alt="" border=3 >
                    </td>
                    <td align="center">{{product.amount}}</td>
                    <td align="center">{{product.Product.price}} USD</td>
                    <td align="center">{{product.amount * product.Product.price}}</td>
                    <td align="center">
                        <div class="buttonContainer">
                            <updateButton 
                            :product="product"
                            @updateCart="updateCart"> 
                            </updateButton>
                            <b-button v-on:click="removeItem(product)" class="b-button" type="is-danger">Remove</b-button>
                        </div>
                    </td>

                </tr>
                <tr>
                    <th align="center">All</th>
                    <td>
                    <td>
                    <td>
             
                    <td align="center">{{totalPrice}}</td>
                    <td align="center"> 
                        <div class="buttonContainer">
                            <b-button v-on:click="checkout" class="b-button" type="is-success">Checkout</b-button>
                            <b-button v-on:click="removeAll" class="b-button" type="is-danger">Remove All</b-button>
                        </div>           
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="emptyCart" v-if="cart.length == 0">
            <h1> Your cart is empty </h1>
        </div>
    </div>
</template>

<script>
    import updateButton from '../components/updateButton.vue';
    import topupButton from '../components/topupButton.vue';
    export default {
        name: 'Cart',
        data() {
            return {
                
            }
        },
        components: {
            updateButton,
            topupButton
        },
        computed: {
            cart(){
                return this.$store.state.cart;
            },
            totalPrice(){
                return this.$store.state.totalPrice;
            },
            user(){
                return this.$store.state.user;
            },
        },
        created(){
            this.loadCart();
            this.updateUser();
        },
        methods: {
            loadCart: function(){
                this.$store.dispatch('getCart');
            },
            updateUser: function(){
                this.$store.dispatch('getUserData');
            },
            topup: function(payload){
                this.updateUser();
            },
            removeItem: function(product){
                swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if(willDelete) {
                        return this.$store.dispatch('removeItem', product)
                    }
                })
                .then(response=>{
                    console.log(response);
                    this.loadCart()
                    this.$router.push('/cart');
                })
                .catch(console.log);
            },
            removeAll: function(){
                swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if(willDelete) {
                        return this.$store.dispatch('removeAll')
                    }
                })
                .then(response=>{
                    console.log(response);
                    this.loadCart()
                    this.$router.push('/cart');
                })
                .catch(console.log);
            },
            updateCart: function(){
                this.loadCart();
            },
            checkout: function(){
                swal({
                    title: "Are you sure?",
                    icon: "info",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willCheckout) => {
                    if(willCheckout) {
                        return this.$store.dispatch('checkout')
                    }
                })
                .then(async response=>{
                    await this.$store.dispatch('getUserData');
                    return response;
                })
                .then(response=>{
                    if(response.status == 200){
                        this.$router.push('/');
                    }
                    else{
                        this.loadCart();
                    }
                })
                .catch(console.log);
            }
        }
    }
</script>

<style scoped>
    img {
        max-height: 150px;
    }
    .buttonContainer {
        display: flex;
        justify-content: space-around;
    }

    table {
        text-align: center;
        width: 75%;
        margin: auto
    }
    td, th {
        vertical-align: middle;
    }
    .b-button {
        width: 100px;
    }


</style>