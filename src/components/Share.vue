<template>
    <div id="share-block" class="share-block">
        <div class="fb-like-block">
    		<div class="fb-like" :data-href="link" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
		</div>
		<div class="line-block">
		    <img class="line-share" src="//media.line.me/img/button/zh-hant/84x20.png" width="92" height="22" alt="LINE分享給朋友">
		</div>
    </div>
</template>

<script>
export default {
    name: 'share',
    props: ['href'],
    computed: {
        link: function(){
            return window.location.href + this.href
        }
    }
}
</script>

<style scoped>
    #share-block{
        height: 28px;
    }
    .fb-like-block{
        float: left;
    }
    .line-block{
        float: left;
        cursor: pointer;
        margin-left: 5px;
        margin-top: 1px;
    }
</style>
