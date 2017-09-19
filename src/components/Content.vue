<template>
    <div :style="{backgroundColor: backgroundColor}">
        <div class="container content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'content',
    props: ['background-color']
}
</script>

<style scoped>
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    p{
        font-size: 21px;
        margin: 0;
    }
    @media screen and (max-width: 767px){
        h2{
            font-size: 26px;
        }
        p{
            font-size: 18px;
            line-height: 32px;
        }
        .content{
            padding: 64px 20px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        .container{
            width: 100%;
        }
        .content{
            padding: 64px 100px;
        }
        h2{
            font-size: 26px;
        }
        p{
            font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .container{
            width: 800px;
        }
        .content{
            padding: 100px 0px;
        }
        p>br{
            line-height: 50px;
        }
    }
</style>