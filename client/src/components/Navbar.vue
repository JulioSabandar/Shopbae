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
            <b-navbar-item tag="router-link" :to="{ path: '/cart' }">
                Cart
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">

                    <SignupButton>
                    </SignupButton>
                </div>
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">

                    <LoginButton>
                    </LoginButton>
                </div>
            </b-navbar-item>
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
        }     
    }
</script>

<style scoped>
    .logo{
       font-size: 200%;
    }
</style>