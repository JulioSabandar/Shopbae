<template>
    <div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th align="center" scope="col">Name</th>
                    <th align="center" scope="col">Picture</th>
                    <th align="center" scope="col">Quantity</th>
                    <th align="center" scope="col">Price</th>
                    <th align="center" scope="col"> Total Price</th>
                    <th align="center" scope="col"> Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in cart" >
                    <td valign="middle" align="center">{{product.Product.name}}</td>
                    <td align="center">
                        <img :src="product.Product.image_url" alt="" border=3 >
                    </td>
                    <td align="center">{{product.amount}}</td>
                    <td align="center">{{product.Product.price}}</td>
                    <td align="center">{{product.amount * product.Product.price}}</td>
                    <td align="center">
                        <div class="buttonContainer">
                            <b-button class="actionButton" type="is-info">Update</b-button>
                            <b-button class="actionButton" type="is-danger">Remove</b-button>
                        </div>
                    </td>

                </tr>
                <tr>
                    <th align="center">All</th>
                    <td>
                    <td>
                    <td>
             
                    <td align="center">{{totalPrice}}</td>
                    <td align="center"> <b-button type="is-success">Checkout</b-button> </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'Cart',
        data() {
            return {

            }
        },
        computed: {
            cart(){
                return this.$store.state.cart;
            },
            totalPrice(){
                return this.$store.state.totalPrice;
            }
        },
        created(){
            this.loadCart();
        },
        methods: {
            loadCart: function(){
                this.$store.dispatch('getCart');
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
                    this.$router.push('/cart');
                })
                .catch(console.log)
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


</style>