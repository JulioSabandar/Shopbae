<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Log in
        </button>
        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <LoginForm v-bind="formProps"></LoginForm>
        </b-modal>
    </section>
</template>

<script>
    import LoginForm from './LoginForm.vue'
    export default {
        components: {
            LoginForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: '',
                    password: ''
                }
            }
        }
    }
</script>