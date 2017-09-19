<template>
    <div class="logo-block">
        <div class="logo">
            <img src="https://udn.com/upf/newmedia/image/udn-logo.svg">
        </div>
        <div class="logo">
            <img src="https://udn.com/upf/newmedia/image/nmd-logo.svg">
        </div>

    </div>
</template>

<script>
export default {
    name: 'logo'
}
</script>

<style scoped>
    .logo{
        width: 140px;
        display: inline-block;
    }
    @media screen and (max-width: 1024px){
        .logo-block{
            margin-top: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .logo-block{
            float: right;
            margin-top: -45px;
        }
    }
</style>
