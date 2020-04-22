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

                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <LoginButton>
                    </LoginButton>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>


<script>
    import LoginButton from './LoginButton.vue';
    export default {
        name: 'Navbar',   
        components: {
            LoginButton
        }     
    }
</script>

<style scoped>
    .logo{
       font-size: 200%;
    }
</style>