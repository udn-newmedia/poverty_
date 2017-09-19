<template>
    <div id="cover" :style="{backgroundImage: 'url(' + bgHandle() + ')'}">
        <div id="title-contain" :style="{top: titleTop + 'px', left: titleLeft + 'px', bottom: titleBottom + 'px', right: titleRight + 'px', width: titleWidth + 'px', height: titleHeight + 'px'}">
            <h1 v-html="title"></h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cover',
    props: ['title', 'titleTop', 'titleLeft', 'titleRight', 'titleBottom', 'titleWidth', 'titleHeight', 'bg', 'bg_mobile'],
    methods: {
        bgHandle: function(){
            if(window.innerWidth <= 1024){
                return this.bg_mobile
            }
            else{
                return this.bg
            }
            
        }
    }
}
</script>

<style scoped>
    #cover {
        height: 100vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #title-contain{
        position: absolute;
    }
    h1{
        font-size: 40px;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.21);
        position: absolute;
        margin: 0;
    }
</style>