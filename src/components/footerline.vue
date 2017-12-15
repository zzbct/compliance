<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 底部信息栏
-->
<style scoped>
    .foot-view{
        min-width: 1024px;
        box-sizing: border-box;
        padding: 10px;
        border-top: 2px solid #ddd;
        background-color: #fff;
    }
    .foot-logo{
        float: left;
        width: 20%;
    }
    .foot-text{
        width:550px;
        margin: 0 auto;
        height: 80px;
        color: #7f8c8d;
        text-align: center;
    }
    .cright{
        float: left;
    }
    .cright>p{
        height: 24px;
        line-height: 24px;
    }
    .foot-line{
        height: 80px;
        line-height: 80px;
        text-align: right;
    }
    .foot-line>span{
        margin-right:10px;
    }
    .imgs{
        float: left;
        width: 80px;
        height: 80px;
    }
</style>
<template>
    <div class="foot-view clearfix">
        <div class="foot-line">
            <span>北京航空航天大学/计算机学院软件所/Powered by (c) MR</span>
            <span>Tel:010-82317624|邮编:100191
           </span>
            <span>Copyright (c) 2016--2100</span>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
            }
        },
        ready: function() {

        },
        beforeDestroy: function() {

        },
        methods: {
        }
    }
</script>
