<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: soi3界面
-->
<style scoped>
    .body-view{
        box-sizing: border-box;
        margin: 0 3%;
        margin-bottom: 30px;
    }
    .list-window{
        width: 100%;
    }
    .list-tool{
        width: 94%;
        height: 60px;
        line-height: 60px;
        position: fixed;
        top: 120px;
        background-color: #fff;
    }
    .num{
        width:8%;
    }
    .discribe{
        width:60%;
    }
    .operate{
        width:13%;
        cursor: pointer;
    }
    .status{
        width:14%;
    }
    .list-context{
        box-sizing: border-box;
        width: 100%;
        max-height: 600px;
        overflow-y: auto;
        margin-top: 160px;
        border:1px solid #ccc;
    }
    .list-item-active div{
        display: inline-block;
        line-height: 30px;
    }
</style>
<template>
    <div class="head">
        <Hnav target="SOI3"></Hnav>
    </div>
    <div class="body-view">
        <div class="title-guideline">
            checklist清单
        </div>
        <div class="list-window">
            <div class="list-tool">
                类型:
                <select v-model="titem" @change="sift">
                    <option value="0">全部</option>
                    <option value="2">基本</option>
                    <option value="1">自定义</option>
                </select>
                状态:
                <select v-model="sfitem" @change="sift">
                    <option value="3">全部</option>
                    <option value="2">未评审</option>
                    <option value="1">已评审</option>
                </select>
                总数:{{total}}
                已评审:{{total-active}}
                <div class="status-bar">
                    <span :style="status[0]"></span>
                </div>
                 未评审:{{active}}
                <div class="status-bar">
                    <span :style="status[1]"></span>
                </div>
            </div>
            <div class="soi-list-title">
                <span class="num after-decorate">序号</span>
                <span class="discribe after-decorate">问题描述</span>
                <span class="status after-decorate">评审状态</span>
                <span class="operate">操作</span>
            </div>
            <div class="list-context scroll">
                <div v-for="item in data" :class="item.Passed==2?'list-item-active':'list-item-reviewed'" track-by="$index"> 
                    <span class="num">{{$index+1}}</span>
                    <div class="discribe">{{item.CheckItem}}</div>
                    <span style="color:#696969" v-show="item.Passed==2" class="status icon-legend0">&nbsp未评审</span>
                    <span v-else class="status icon-confirm">&nbsp已评审</span>
                    <span style="color:#0080ff" @click="goReview(item.ID,$index)" class="operate">
                        进入评审
                    </span>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
    import hnav from '../components/hnav.vue';
    import Vue from 'vue';
    module.exports = {
        data: function() {
            return {
                data:[],
                total:0,
                active:0,
                sfitem:3,
                titem:0,
                status:[
                   {
                     background:'#1ed75f',
                     height:'10px',
                     width:'0%'
                   },
                   {
                     background:'#696969',
                     height:'10px',
                     width:'100%'
                   }
                ]
            }
        },
        components:{
            Hnav:hnav
        },
        computed:{
           
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
                vm.sift();
            }
        },
        beforeDestroy: function() {

        },
        methods: {
            // 将所有id存入数组
            proId:function(obj){
                let len=obj.length;
                let arr=[];
                for(let i=0;i<len;i++){
                    arr.push(obj[i].ID);
                }
                return arr;
            },
            // 进入问题详细评审页
            goReview:function(id,index){
                let vm=this;
                let tmp=vm.proId(vm.data);
                localStorage.setItem('listPos',index);
                localStorage.setItem('idSet',JSON.stringify(tmp));
                localStorage.setItem('listId',id);
                 localStorage.setItem('stage','SOI3');
                vm.$router.go({path:'./list'});
            },
            // 条件筛选
            // 条件筛选
            sift:function(){
                let vm=this;
                let address='rItem/review?stage=SOI3&passed='+vm.sfitem+'&cus='+vm.titem;
                let resource = vm.$resource(address)
                resource.get()
                .then((response) => {
                    if(response.data.Code==200){
                        vm.data=response.data.RItemList;
                        if(vm.sfitem==3){
                            vm.total=response.data.Total;
                            vm.active=0;
                            let len=vm.data.length;
                            for(let i=0;i<len;i++){
                                if(vm.data[i].Passed==2){
                                    vm.active++;
                                }
                            }
                            let percent = Math.round(vm.active / vm.total * 100);
                            let rate= (percent == 'NaN') ? '0' : percent;
                            vm.status[1].width=rate+'%';
                            vm.status[0].width=(100-rate)+'%';
                        }
                    }
                    else{
                        vm.$router.go({path:'./index'});
                    }
                })
                .catch(function(response) {
                    console.log(response)
                })
            }
        },
        events:{
        }
    }
</script>]