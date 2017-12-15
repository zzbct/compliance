<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description:基本信息界面
-->
<style scoped>
    .base-info{
        margin-top:120px;
        box-sizing: border-box;
        width: 100%;
        min-height: 1024px;
        padding: 30px;
        background-color: #ddd;
    }
    .infos{
        width: 100%;
        background-color:rgba(0, 114, 227,0.5);
    }
    .top{
        box-sizing: border-box;
        width:100%;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        text-align: left;
        font-size: 16px;
        border-bottom:1px dashed #ccc;
    }
    .content{
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
        margin-bottom: 50px;
    }
    .content textarea{
        width:70%;
        height:100px;
        padding: 10px;
        border:1px solid #ccc;
    }
    .conbody{
        box-sizing: border-box;
        float:left;
        width:33%;
    }
    .conbody span{
        display: inline-block;
        box-sizing: border-box;
        height:40px;
        padding: 0 5px;
        max-width: 100px;
        width: 35%;
        line-height: 40px;
        text-align: center;
        background-color: lightgray;
    }
    .conbody input{
        display: inline-block;
        padding: 0 5px;
        max-width:200px;
        width:55%;
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
    }
    .conbody select{
        box-sizing: border-box;
        width:40%;
        max-width: 100px;
        height:40px;
        padding: 0 5px;
        line-height: 40px;
        border: 1px solid #ccc;
    }
    .footer-btn{
        width:200px;
        height:40px;
        color:black;
        font-size: 16px;
        border: none;
    }
    .footer-btn:hover{
        color:#fff;
        background-color: #28a7e1;
    }
    .reload{
        font-size: 16px;
        color:#57adfb;
    }  
    .pres{
      cursor: pointer;
      font-size: 16px;
      color:#57adfb;
      line-height: 40px;
    }
</style>
<template>
    <div class="header">
        <Hnav></Hnav>
    </div>
    <div class="title-guideline" style="padding:0 30px">
        <span @click="cancel" title="返回到上一阶段" class="icon-l-play pres"></span>
        基本信息
        <span @click="getInfo" class="reload icon-reload"></span>
    </div>
    <div class="base-info">
        <div class="infos">
            <div class="top">&gt&gt&nbsp软件信息</div>
            <div class="content clearfix">
                <div class="conbody">
                    <span>软件名称</span>
                    <input v-model="data.SoftwareName" type="text">
                </div>
                <div class="conbody">
                    <span>软件级别</span>
                    <select v-model="data.SoftwareLevel">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="infos">
            <div class="top">&gt&gt&nbsp人员信息</div>
            <div class="content clearfix">
                <div class="conbody">
                    <span>工号ID</span>
                    <input v-model="data.ReviewerID" type="text" placeholder="请输入唯一标识的工号">
                </div>
                <div class="conbody">
                    <span>评审人</span>
                    <input v-model="data.ReviewerName" type="text" placeholder="请输入真实姓名">
                </div>
                <div class="conbody">
                    <span>身份</span>
                    <input v-model="data.Identity" type="text" placeholder="请输入职责">
                </div>
            </div>
        </div>
        <div class="infos">
            <div class="top">&gt&gt&nbsp期望目标</div>
            <div class="content">
                <textarea v-model="data.ExpectedGoal"></textarea>
            </div>
        </div>
        <div class="footer">
            <button @click="posInfo" class="footer-btn">确定</button>
            <!--<button @click="testApi" class="footer-btn">确定</button>-->
            <button class="footer-btn" @click="cancel">取消</button>
        </div>
    </div>
</template>
<script>
    import hnav from '../components/hnav.vue';
    import $ from 'jquery';
    import Vue from 'vue';
    module.exports = {
        data: function() {
            return {
                data:{}
            }
        },
        components:{
            Hnav:hnav
        },
        created:function(){
        },
        ready: function() {
            let vm=this;
            let v1=localStorage.getItem('key');
            let v2=localStorage.getItem('id');
            if(v1==undefined || v2==undefined){
                vm.$router.go({path:'./index'});
            }
            else{
              Vue.http.headers.common.Auth = v1;
              Vue.http.headers.common.ID= v2;
              vm.getInfo();
           }
        },
        beforeDestroy: function() {

        },
        methods: {
            getInfo:function(){
                let vm=this;
                let key=localStorage.getItem('id');
                let resource = vm.$resource('recordGet?id='+key);
                resource.get()
                        .then((response) => {
                            if(response.data.Code==200){
                             vm.data=response.data.reviewRecord;
                             localStorage.setItem('goal',vm.data);
                            }
                            else{
                                this.$router.go({path:'./index'});
                            }
                        })
                        .catch(function(response) {
                            console.log(response)
                         })
            },
            // 将相关 信息传递给后台
            posInfo:function(){
                let vm=this;
                vm.data['UserID']=parseInt(localStorage.getItem('id'));
                delete vm.data.ReviewRecordID;
                if(vm.data.ReviewerName==""||vm.data.Identity==""||vm.data.ExpectedGoal==""||vm.data.ReviewerID==""||vm.data.SoftwareName==""){
                    confirm('请将信息填写完整!')
                }
                else{
                    vm.$http.post('reUpdate', vm.data)
                        .then((response) => {
                             if(response.data.Code==200){
                                localStorage.setItem('identity',vm.data.Identity);
                                vm.$router.go({path:'./drlist'});
                             }
                            else{
                                this.$router.go({path:'./index'});
                            }
                        })
                }
            },
            cancel:function(){
                this.$router.go({path:'./home'});
            }
        }
    }
</script>
