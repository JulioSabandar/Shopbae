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
            <TopupForm @topup="topup"></TopupForm>
        </b-modal>
    </section>
</template>

<script>
    import TopupForm from './topupForm.vue'
    export default {
        components: {
            TopupForm
        },
        data() {
            return {
                isComponentModalActive: false,
            }
        },
        method: {
            topup: function(){
                this.$emit('topup');
            }
        }
    }
</script>