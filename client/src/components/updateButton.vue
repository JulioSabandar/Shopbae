<template>
    <section>
        <b-button id="ayyy" class="aaaaaa"
        type="is-success"
            @click="isComponentModalActive = true">
            Update
        </b-button>
        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <updateForm :product="product"></updateForm>
        </b-modal>
    </section>
</template>

<script>
    import updateForm from './updateForm.vue'
    export default {
        components: {
            updateForm
        },
        props: ['product'],
        data() {
            return {
                isComponentModalActive: false
            }
        }
    }
</script>

<style scoped>
    #ayyy{
        width: 100px;
    }
    .aaaaaa{
        width: 100px;
    }
<style>