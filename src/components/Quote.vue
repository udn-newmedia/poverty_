<template>
    <div class="quote-contain" v-bind:style="{ 'border-top-color': borderColor, 'border-bottom-color': borderColor}">
        <div class="quote-text" v-html="text" v-bind:style="{color: color}"></div>
        <div class="quote-ref">{{refer}}</div>
    </div>
</template>

<script>
export default {
    name: 'quote',
    props: ['text', 'refer', 'color', 'borderColor']
}
</script>

<style scoped>
    .quote-contain {
        font-family: "PMingLiU";
        font-weight: bold;
        font-size: 32px;
        min-height: 125px;
        color: #888888;
        padding: 15px 0;
        border-top: dotted 1px #DCDDDD;
        border-bottom: dotted 1px #DCDDDD;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 125px;
        position: relative;
        letter-spacing: -1px;
    }
    @media screen and (max-width: 767px){
        .quote-contain{
            font-size: 26px;
            align-items: flex-end;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        .quote-contain{
            align-items: flex-end;
        }
    }
</style>
