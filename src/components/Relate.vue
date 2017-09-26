<template>
    <div id="report" class="gray-back">
        <div>
            <h6>延伸閱讀</h6>
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <slot name="relate-1"></slot>
                </div>
                <div class="col-sm-6 col-md-3">
                    <slot name="relate-2"></slot>
                </div>
                <div class="col-sm-6 col-md-3">
                    <slot name="relate-3"></slot>
                </div>
                <div class="col-sm-6 col-md-3">
                    <slot name="relate-4"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'relate'
}
</script>

<style scoped>
    h6 {
        font-size: 17px;
        color: #434242;
        font-weight: bold;
    }
    #report p{
        font-size: 16px;
    }

    #report a {
        color: #000000;
        text-decoration: none;
    }

    #report img:hover{
        opacity: .5;
        transition: opacity .2s ease;
    }

    #report a:hover { 
        text-decoration: underline;
    }
        
    #report .col-sm-6 img{
        width: 208px;
        height: 146px;
    }

    @media screen and (max-width: 767px){
         #report .col-sm-6{
            clear: both;
        }

        .people-contain img{
            width: 100%;
            height: auto;
        }

        #report p {
            font-size: 16px;
            float: left;
            width: 45%;
            margin-top: 10px;
        }

        #report .col-sm-6 img {
            width: auto;
            height: auto;
            float: right;
            width: 50%;
            padding-left: 10px;
            padding-bottom: 10px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        #report .col-sm-6 img{
            width: 100%;
            height: auto;
        }
    }
</style>
