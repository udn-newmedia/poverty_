<template>
    <div class="fixed-background">
        <div class="canvas-bg" v-bind:style="{opacity: opacity}">
            <canvas />
        </div>
        <div class="fix-text">{{text}}</div>
    </div>
</template>

<script>

export default {
    name: 'fixedbackground',
    props: ['text', 'src', 'src-web'],
    data: function(){
        return{
            w: window.innerWidth,
            ctx: null,
            image: new Image(),
            opacity: 0
        }
    },
    computed: {
        canvas_width: function(){
            if(this.w < 1024){
                return 375
            }
            else{
                return 1280
            }
        },
        canvas_height: function(){
            if(this.w < 1024){
                return 667
            }
            else{
                return 720
            }
        }
    },
    methods: {
        drawCanvas:function(){
            this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.canvas_width, this.canvas_height)
        },
        handleScroll: function(e){
            let currentH = window.pageYOffset
            if(currentH > (this.$el.offsetTop - window.innerHeight - 200) && currentH < (this.$el.offsetTop + window.innerHeight)){
                this.opacity = 1
            }
            else{
                this.opacity = 0
            }
        }
    },
    mounted: function(){
        
        this.ctx = this.$el.children[0].children[0].getContext('2d')
        if(this.w < 1024){
            this.image.src = this.src
            this.$el.children[0].children[0].width = this.canvas_width
            this.$el.children[0].children[0].height = this.canvas_height
        }
        else{
            this.image.src = this.srcWeb
            this.$el.children[0].children[0].width = this.canvas_width
            this.$el.children[0].children[0].height = this.canvas_height
        }
        this.image.addEventListener('load', this.drawCanvas)
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped>
    .fixed-background{
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fix-text{
        font-size: 26px;
        letter-spacing: -0.5px;
        color: #FFFEFE;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.4)
    }
    .canvas-bg{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        transition: opacity 0.7s ease;
    }
    canvas{
        width: 100%;
    }
    @media screen and (min-width: 1024px) and (max-width: 1280px){
        .fix-text{
            font-size: 40px;
        }
        .canvas-bg{
            height: 100%;
            left: -12.5%;
        }
        canvas{
            width: auto;
            height: 100%;
        }
    }
    @media screen and (min-width:1281px){
        .fix-text{
            font-size: 40px;
        }
    }
</style>