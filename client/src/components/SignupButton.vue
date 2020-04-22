<template>
    <section>
        <b-button class="button is-success"
            @click="isComponentModalActive = true" outlined>
            Sign up
        </b-button>
        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <SignupForm ></SignupForm>
        </b-modal>
    </section>
</template>

<script>
    import SignupForm from './SignupForm.vue'
    export default {
        components: {
            SignupForm
        },
        data() {
            return {
                isComponentModalActive: false
            }
        }
    }
</script>