<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 登录界面
-->
<style scoped>
    .wbody{
        width:100%;
        min-height:900px;
        background:url("../images/bg3.png") no-repeat;
        background-size:100% 100%;
        padding-top:10%;
        box-sizing:border-box;
    }
    .title{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 100px;
    }
    .door{
        float: right;
        margin-right:200px;
        margin-top:100px;
        width:500px;
    }
    button{
        width:60px;
        height:40px;
        font-size:20px;
        margin-left: 1px;
        color:black;
    }
    .in-btn{
        float: right;
    }
    .up-btn{
        float: right;
    }
    .btn-active{
        color: #fff;
        background-color: #28a7e1;
    }
    .tabel{
        min-width: 400px;
        background-color: #fff;
    }
</style>
<template>
    <div class="wbody clearfix">
        <div class="door">
            <div class="menu clearfix">
                <span class="title">Compliance Review</span>
                <button @click="up" class="up-btn" :class="!acount?'btn-active':''">注册</button>
                <button @click="in" class="in-btn" :class="acount?'btn-active':''">登录</button>
            </div>
            <div class="tabel">
                <div v-if="acount">
                    <signin></signin>
                </div>
                <div v-else>
                    <signup></signup>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Sign from "../components/s-in.vue";
    import Sigp from "../components/s-up.vue";
    module.exports = {
        components:{
            signin:Sign,
            signup:Sigp
        },
        data: function() {
            return {
                acount:true
            }
        },
        created:function(){
           localStorage.removeItem('UserName');
           localStorage.removeItem('id');
        },
        ready: function() {
        },
        beforeDestroy: function() {

        },
        methods: {
            up: function () {
                this.acount = false;
            },
            in:function () {
                this.acount = true;
            }
        },
        events:{
            change_acount:function(){
                this.acount = true;
            }
        }
    }
</script>
