<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h1 class="logo"> Shopbae </h1>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" v-if="isLoggedIn" :to="{ path: '/cart' }">
                Cart
            </b-navbar-item>
        </template>

        <template slot="end">
            <div v-if="isLoggedIn" class="signlog">
                <b-navbar-item tag="div">

                <button class="button is-danger" v-on:click.stop="signout">
                    Log out
                </button>
                </b-navbar-item>

            </div>
            <div v-if="!isLoggedIn" class="signlog">
                <b-navbar-item tag="div">
                    <SignupButton>
                    </SignupButton>
                </b-navbar-item>
                <b-navbar-item tag="div">
                    <LoginButton>
                    </LoginButton>
                </b-navbar-item>
            </div>
        </template>
    </b-navbar>
</template>


<script>
    import LoginButton from './LoginButton.vue';
    import SignupButton from './SignupButton.vue';
    export default {
        name: 'Navbar',   
        components: {
            LoginButton,
            SignupButton
        },
        computed: {
            isLoggedIn(){
            return this.$store.state.isLoggedIn;
            },
        },
        methods: {
            signout: function(){
                localStorage.clear();
                this.$store.commit('SET_ISLOGGEDIN', false);
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .logo{
       font-size: 200%;
    }
    .signlog{
        display: flex
    }
</style>