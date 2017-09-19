<template>
    <div id="head-bar" :style="{opacity: opacity, top: top+'px'}">
        <div id="icon">
            <a href="."><img src="https://udn.com/upf/newmedia/image/udn.png"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indicator',
    props: ['color'],
    data: function(){
        return{
            opacity: 1,
            top: 0
        }
    },
    mounted: function(){
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function(event){
            if(event.srcElement.body.scrollTop < window.innerHeight / 2){
                this.opacity = 0.9
                this.top = 0
            }
            else{
                this.opacity = 0.9
                this.top = 4
            }
        }
    }
}
</script>

<style scoped>

    #head-bar {
        position: fixed;
        background-color: #231815;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99999;
        transition: opacity 0.7s ease;
        opacity: 0.9;
    }
    #icon img {
        width: 130px;
        margin-top: -3px;
    }
    @media screen and (max-width: 1024px){
        #head-bar{
            height: 46px;
        }
        #icon {
            height: 46px;
            line-height: 46px;
            text-align: center;
        }
    }
    @media screen and (min-width: 1025px){
        #head-bar{
            height: 50px;
        }
        #icon {
            height: 50px;
            line-height: 50px;
        }
    }

</style>