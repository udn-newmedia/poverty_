<template>
    <div id="indicator" :style="{opacity: opacity}">
        <div id="indicator-bar" :style="{width: progress + '%', backgroundColor: color}"></div>
    </div>
</template>

<script>
export default {
    name: 'indicator',
    props: ['color'],
    data: function(){
        return{
            progress: 0,
            opacity: 0
        }
    },
    mounted: function(){
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function(event){
            let currentH = event.srcElement.body.scrollTop
            let totalH = event.srcElement.body.clientHeight - window.innerHeight
            this.progress = ((currentH / totalH) * 100).toFixed(2)
            if(event.srcElement.body.scrollTop < window.innerHeight / 2){
                this.opacity = 0
            }
            else{
                this.opacity = 1
            }
        }
    }
}
</script>

<style scoped>

    #indicator{
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.7s ease;
        background-color: #FFFFFF;
    }
    /* Default Bar Color */
    #indicator-bar{
        background-color: #AA4444;
    }

    @media screen and (max-width: 1024px){
        #indicator{
            height: 4px;
        }
        #indicator-bar{
            height: 4px;
        }
    }

    @media screen and (min-width: 1025px){
        #indicator{
            height: 6px;
        }
        #indicator-bar{
            height: 6px;
        }
    }

</style>