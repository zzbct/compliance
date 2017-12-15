<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 顶部导航栏
-->
<style scoped>
    #hnav-view {
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        /*background-color: #f7c106;*/
        top:0;
        background-color:gray;
        font-size: 20px;
        position: fixed;
        min-width:1080px;
        z-index: 100;
    }
    .logo{
        float: left;
        width:10%;
        max-width: 88px;
        height: 80px;
        background: url('../images/logo7.png') no-repeat;
        background-size: 100% 100%;
    }
    .item{
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width:12%;
        height: 80px;
        vertical-align:middle;
        line-height: 80px;
        text-align: center;
        /*color:#fff;*/
        color:#ccc;
        cursor: pointer;
    }
    .item:hover{
        color:#00dfb9;
    }
    .item-active{
        /*background-color: #ef8614;*/
        color:#00dfb9;
    }
    .item-active:after{
        content:"";
        width:80%;
        height:4px;
        /*background-color: black;*/
        background-color: #00dfb9;
        position: absolute;
        top:0;
        left: 10%;
    }
    .span-icon{
        display: inline-block;
        box-sizing: border-box;
        cursor: pointer;
        height: 80px;
        width: 6%;
        text-align: center;
        color: #00dfb9;
        line-height: 80px;
    }
</style>
<template>
    <div id="hnav-view">
        <div class="logo"></div>
        <span v-link="{path:'./home'}" class="item " :class="isHome?'item-active':''">首页</span>
        <span v-link="{path:'./SOI1'}" class="item " :class="isSoi1?'item-active':''">SOI #1</span>
        <span v-link="{path:'./SOI2'}" class="item" :class="isSoi2?'item-active':''">SOI #2</span>
        <span v-link="{path:'./SOI3'}" class="item" :class="isSoi3?'item-active':''">SOI #3</span>
        <span v-link="{path:'./SOI4'}" class="item" :class="isSoi4?'item-active':''">SOI #4</span>
        <span v-link="{path:'./report'}" class="item" :class="isReport?'item-active':''">评审结果</span>
        <span title="返回首页" @click="getGoal" class="span-icon icon-person"></span>
        <span title="注销" @click="posLog" class="span-icon icon-power"></span>
    </div>
</template>
<script>
    import Vue from 'vue';
    module.exports = {
        props:{
            target:{
                type:String,
                default:'home'
            }
        },
        data: function() {
            return {
            }
        },
        computed:{
            isHome:function(){
                if(this.target==="home"){
                    return true;
                }
                else{
                    return false;
                }
            },
            isSoi1:function () {
                if(this.target==="SOI1"){
                    return true;
                }
                else{
                    return false;
                }
            },
            isSoi2:function () {
                if(this.target==="SOI2"){
                    return true;
                }
                else{
                    return false;
                }
            },
            isSoi3:function () {
                if(this.target==="SOI3"){
                    return true;
                }
                else{
                    return false;
                }
            },
            isSoi4:function () {
                if(this.target==="SOI4"){
                    return true;
                }
                else{
                    return false;
                }
            },
            isReport:function () {
                if(this.target==="report"){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        ready: function() {
              // 实现fixed下的左右滑动,垂直定位
             window.onscroll=function(){
                let sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
                    document.getElementById('hnav-view').style.left=sl+'px';

                };
        },
        beforeDestroy: function() {

        },
        methods: {
            posLog:function(){
                let vm=this;
                let v1=localStorage.getItem('rnode');
                if(v1==undefined){
                    if(confirm('您未进行任何评审，确定退出?')){
                         // post自己的操作日志
                        localStorage.clear();
                        Vue.http.headers.common['Auth'] ='';
                        Vue.http.headers.common['ID'] = '';
                        vm.$router.go({path:'./index'});
                    }
                }
                else{
                    vm.getName();
                }
            },
              // 获取目标信息
            getName:function () {
                let vm=this;
                let flag=0;
                let key=localStorage.getItem('id');
                let resource = vm.$resource('recordGet?id='+key);
                resource.get()
                        .then((response) => {
                             if(response.data.Code==200){
                                let obj=response.data.reviewRecord;
                                let name="";
                                if(obj.ReviewerName==""){
                                    name=localStorage.getItem('UserName');
                                }
                                else{
                                    name=obj.ReviewerName;
                                }
                                let data={
                                    userName:name,
                                    RTime:localStorage.getItem('curTime'),
                                    ID:parseInt(key),
                                    RNode:localStorage.getItem('rnode'),
                                    identity:obj.Identity
                                };
                                flag=1;
                                if(flag==1){
                                     vm.$http.post('log/update',data)
                                        .then((response) => {
                                            if(response.data.Code==200){
                                                localStorage.clear();
                                                Vue.http.headers.common['Auth'] ='';
                                                Vue.http.headers.common['ID'] = '';
                                                vm.$router.go({path:'./index'});
                                            }
                                            else{
                                                vm.$router.go({path:'./index'});
                                            }
                                        })
                                }
                             }
                             else{
                                vm.$router.go({path:'./index'});
                             }

                        })
                        .catch(function(response) {
                            console.log(response)
                         })
            },
            getGoal:function(){
                let vm=this;
                vm.$router.go({path:'./home'});
            }
        }
    }
</script>
