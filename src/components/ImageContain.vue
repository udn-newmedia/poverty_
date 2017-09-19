<template>
    <div>
        <div class="image-contain" v-bind:style="{height: containHeight}">
            <img :src="link" />
        </div>
        <div class="img-say">{{imgsay}}</div>
    </div>
</template>

<script>
export default {
    name: 'imagecontain',
    props: ['width', 'height', 'src', 'imgsay', 'srcWeb', 'widthWeb', 'heightWeb'],
    computed: {
        link: function(){
            if(window.innerWidth < 1024){
                return this.src
            }
            else{
                return this.srcWeb
            }
        },
        containHeight: function(){
            if(window.innerWidth < 768){
                return this.height * window.innerWidth / this.width + 'px'
            }
            else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                return this.height * (window.innerWidth-200) / this.width + 'px'
            }
            else{
                return this.heightWeb * 800 / this.widthWeb + 'px'
            }
            
        }
    }
}
</script>

<style scoped>
    img{
        position: absolute;
        width: 100%;
    }
    .img-say{
        font-size: 15px;
        color: gray;
        margin-top: 5px;
    }
    @media screen and (max-width: 767px){
        img{
            margin-left: -20px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        img{
            width: calc(100% - 200px);
        }
    }
    @media screen and (min-width: 1025px){
        img{
            width: 800px;
        }
    }
</style>
