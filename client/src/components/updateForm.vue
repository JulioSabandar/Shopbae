<template>
    <form @submit.prevent="update">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Update {{product.Product.name}}</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Quantity">
                    <b-input
                        type="number"
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
                let payload = {
                    id: this.product.id,
                    amount: this.amount
                }
                console.log(payload)
                this.$store.dispatch("updateProduct", payload)
                .then(result=>{
                    this.$parent.close();
                    this.$emit('updateCart');
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>