<template>
    <form @submit.prevent="login">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Log in</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Email">
                    <b-input
                        type="email"
                        :value="email"
                        v-model="email"
                        placeholder="Your email"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                        type="password"
                        :value="password"
                        v-model="password"
                        password-reveal
                        placeholder="Your password"
                        required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button type="submit" class="button is-primary">Login</button>
            </footer>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'LoginForm',
        data(){
            return{
                email: null,
                password: null,
            }
        },
        methods: {
            login(){
                let loginInput = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch("login", loginInput)
                .then(result=>{
                    console.log('aaaaaaa');
                    this.$router.push('/');
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
