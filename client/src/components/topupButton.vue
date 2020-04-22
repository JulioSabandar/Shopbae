<template>
    <section>
        <button class="button is-success"
            @click="isComponentModalActive = true">
            Top up
        </button>
        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <TopupForm 
            @topupz="$emit('topupz')"
            >
            </TopupForm>
        </b-modal>
    </section>
</template>

<script>
    import TopupForm from './topupForm.vue'
    export default {
        name: 'topupButton',
        components: {
            TopupForm
        },
        data() {
            return {
                isComponentModalActive: false,
            }
        }
    }
</script>