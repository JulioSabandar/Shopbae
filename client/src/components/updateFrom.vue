<template>
    <form @submit.prevent="update">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Update Product</p>
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

                <b-field label="Username">
                    <b-input
                        type="username"
                        :value="username"
                        v-model="username"
                        password-reveal
                        placeholder="Your username"
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
                <button type="submit" class="button is-success">Sign up</button>
            </footer>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'SignupForm',   
                data(){
            return{
                email: null,
                username: null,
                password: null
            }
        },
        methods: {
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