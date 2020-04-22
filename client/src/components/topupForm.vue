<template>
    <form @submit.prevent="login">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Top up</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Enter any amount">
                    <b-input
                        type="number"
                        :value="topupvalue"
                        v-model="topupvalue"
                        required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button type="submit" class="button is-success">Top up</button>
            </footer>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'LoginForm',
        data(){
            return{
                topupvalue: null,
            }
        },
        methods: {
            topup(){
                this.$store.dispatch("topup", this.topupvalue)
                .then(result=>{
                    this.$parent.close();
                    this.$emit('topup');
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
