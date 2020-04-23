<template>
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <span class="image" width="100%">
                <img :src="carousel.src">
            </span>
        </b-carousel-item>
    </b-carousel>
</template>

<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary', src:'/assets/simplicity.jpg' },
                { text: 'Slide 2', color: 'info', src:'/assets/unlimited.jpg'},
            ]
        }
    }
}
</script>