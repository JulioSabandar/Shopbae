<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Sign up
        </button>
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
                isComponentModalActive: false,
            }
        }
    }
</script>