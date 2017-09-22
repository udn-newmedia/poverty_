<template>
    <div class="fb-comment-block">
        <div class="fb-comments" :data-href="link" data-numposts="5" data-width="100%" data-order-by="reverse_time"></div>
    </div>
</template>

<script>
export default {
    name: 'fb-comment',
    props: ['href'],
    computed: {
        link: function(){
            return window.location.href + this.href
        }
    }
}
</script>

<style scoped>
    
</style>
