<template>
    <form @submit.prevent="update">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Update {{product.Product.name}}</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Quantity">
                    <b-input
                        type="username"
                        :value="product.amount"
                        v-model="amount"
                        required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button type="submit" class="button is-success">Update</button>
            </footer>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'updateForm',   
        data(){
            return{
                amount: null,
            }
        },
        props: ['product'],
        created(){
            this.amount = this.product.amount;
            console.log(this.product)
        },
        methods: {
            update(){

            },
            register(){
                let registerInput = {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }
                console.log(registerInput)
                this.$store.dispatch("register", registerInput)
                .then(result=>{
                    this.$router.push('/');
                    this.$parent.close();
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>