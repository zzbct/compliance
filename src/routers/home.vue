<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 首页界面
-->
<style scoped>
    .view{
        width: 100%;
    }
    .backs{
        margin-top: 80px;
        box-sizing: border-box;
        height: 400px;
        text-align: center;
    }
    .backs img{
        width: 100%;
        max-height: 400px;
    }
    .text{
    	width: 100%;
    	margin:20px 0;
    }
    .text>div{
    	text-align: center;
    }
    .t-main{
    	height: 40px;
    	line-height: 40px;
    	color:#242359;
    	font-size:36px;
    }
    .t-sub span{
    	position: relative;
    	height: 30px;
    	line-height: 30px;
    	color:#d0d0d0;
    	font-size:30px;
    }
    .t-sub span:after{
    	position: absolute;
    	top:14px;
    	left:-100px;
    	content: "";
    	width:100px;
    	height: 1px;
    	background-color: #d0d0d0;
    }
    .t-sub span:before{
    	position: absolute;
    	top:14px;
    	left:100%;
    	content: "";
    	width:100px;
    	height: 1px;
    	background-color: #d0d0d0;
    }
    .t-text{
    	height: 30px;
    	line-height: 30px;
    	color:#242359;
    	font-size:16px;
    }
    .link{
        width:96%;
        height:200px;
        margin: 0 2%;
    }
    .link-bool{
        box-sizing: border-box;
        float: left;
        width: 32%;
        height: 200px;
        margin:0 0.5%;
        padding: 25px;
        cursor: pointer;
        text-align: center;
        background-color: #fff;
        -webkit-transition: background-color .6s ease;
    }
    .link-bool:hover{
        background-color:rgba(32,32,32,0.9);
    }
    .link-bool p{
        margin:15px 0; 
    }
    .icon-font1{
        font-size: 40px;
        color:#0072e3;
    }
    .icon-font2{
        font-size: 40px;
        color:#01b468;
    }
    .icon-font3{
        font-size: 40px;
        color:#930093;
    }
    .home-title{
        font-size: 24px;
        font-weight: bolder;
    }
    .home-extext{
        color:#d0d0d0;
        font-weight: 900;
    }
</style>
<template>
    <div class="view">
        <div class="header">
            <Hnav></Hnav>
        </div>
        <div class="backs">
            <img src="../images/white-back2.png">
        </div>
        <div class="text">
       <!--      <div class="t-main">
                       Compliance Review
                   </div> -->
        	<div class="t-sub">
        	    <span>&nbspCompliance Review&nbsp</span>
        	</div>
        	<div class="t-text">协同工作,可追溯证据链,可视化管理</div>
        </div>
        <!-- 三张图片链接(基本信息、DR自定义检查单、文档信息)-->
        <div class="link clearfix">
            <div class="link-bool" v-link="{path:'./baseinfo'}">
               <p class="icon-left-edit icon-font1"></p>
               <p class="home-title">基本信息</p>
               <p class="home-extext">Basic information</p>
            </div>
             <div class="link-bool" v-link="{path:'./drlist'}">
               <p class="icon-file-empty icon-font2"></p>
               <p class="home-title">自定义检查单</p>
               <p class="home-extext">Custom checklist</p>
            </div>
             <div class="link-bool" v-link="{path:'./doc'}">
               <p class="icon-paragraph-left icon-font3"></p>
               <p class="home-title">资料准备</p>
               <p class="home-extext">Data preparation</p>
            </div>
        </div>
        <div>
            <Footline></Footline>
        </div>
    </div>
</template>
<script>
    import hnav from '../components/hnav.vue';
    import footline from '../components/footerline.vue';
    import $ from 'jquery';
    module.exports = {
        data: function() {
            return {
                data:{}
            }
        },
        components:{
            Hnav:hnav,
            Footline:footline
        },
        created:function(){
            let vm=this;
            let v1=localStorage.getItem('key');
            let v2=localStorage.getItem('id');
            if(v1==undefined || v2==undefined){
                vm.$router.go({path:'./index'});
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
