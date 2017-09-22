<template>
    <div id="cover" :style="{backgroundImage: 'url(' + bgHandle() + ')'}">
        <div id="title-contain" :style="styleHandle()">
            <h1 v-html="title" :style="{fontSize: rwdFontSize + 'px'}"></h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cover',
    props: ['title', 'titleTop', 'titleLeft', 'titleRight', 'titleBottom', 'titleWidth', 'titleHeight', 'titleTopWeb', 'titleLeftWeb', 'titleRightWeb', 'titleBottomWeb', 'titleWidthWeb', 'titleHeightWeb', 'bg', 'bgWeb', 'fontSize'],
    computed: {
        rwdFontSize: function(){
            if(window.innerWidth < 768){
                return this.fontSize
            }
            else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                return Number(this.fontSize) + 5
            }
            else{
                return Number(this.fontSize) + 20
            }
        }
    },
    methods: {
        styleHandle: function(){
            if(window.innerWidth <= 1024){
                return {top: this.titleTop + 'px', left: this.titleLeft + 'px', bottom: this.titleBottom + 'px', right: this.titleRight + 'px', width: this.titleWidth + 'px', height: this.titleHeight + 'px'}
            }
            else{
                return {top: this.titleTopWeb + 'px', left: this.titleLeftWeb + 'px', bottom: this.titleBottomWeb + 'px', right: this.titleRightWeb + 'px', width: this.titleWidthWeb + 'px', height: this.titleHeightWeb + 'px'}
            }
        },
        bgHandle: function(){
            if(window.innerWidth <= 1024){
                return this.bg
            }
            else{
                return this.bgWeb
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
        font-size: 60px;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.21);
        position: absolute;
        margin: 0;
    }
    @media screen and (max-width: 767px){
        h1{
            font-size: 40px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        h1{
            font-size: 45px;
        }
    }
</style>