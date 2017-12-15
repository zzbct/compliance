<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 资料信息录入组件
-->
<style scoped>
    .item-view{
        height: auto;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 2px solid black;
    }
    .outline{
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
    .node-view{
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 20px;
        margin-top: 20px;
        border: 1px dashed #930093;
    }
    .outline div{
        box-sizing: border-box;
        height: 40px;
        float: left;
    }
    .outline div span{
        display: inline-block;
        box-sizing: border-box;
        height:40px;
        padding: 0 5px;
        line-height: 40px;
        text-align: left;
        background-color: #d3d3d3;
    }
    .outline div input{
        display: inline-block;
        box-sizing: border-box;
        padding: 0 5px;
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
    }
    .static-1{
        width: 10%;
    }
    .static-1 input{
        width:60%;
    }
    .static-2{
        width:35%;
    }
    .static-2 input{
        width:70%;
    }
    .static-3{
        width:15%;
        margin-right: 10px;
    }
    .static-3 input{
        width:60%;
    }
    .icon-oc{
        color:#ef8614;
        cursor: pointer;
    }
    .trash{
        line-height: 40px;
    }
    /*1227新增样式*/
    .node-top{
        width: 100%;
        height: 40px;
        background-color: #d3d3d3;
        font-size: 0;
    }
    .node-top span{
        box-sizing: border-box;
        display: inline-block;
        line-height: 40px;
        color:red;
        font-size: 16px;
        text-align: center;
        border:1px solid #fff;
    }
    .node-top-1{
        width: 10%;
    }
    .node-top-2{
        width: 60%;
    }
    .details{
        width: 100%;
        /*height: 40px;*/
        font-size: 0;
        border-bottom: 1px solid #ccc;
    }
    .details-1{
        box-sizing: border-box;
        padding-left:10px;
        width: 10%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        border-right:1px solid #ccc;
    }
    .details-2{
        box-sizing: border-box;
        padding-left:10px;
        width: 60%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        border-right:1px solid #ccc;
    }
    .details-3{
        display: inline-block;
        width: 5%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
    }
    .details-3:active{
        color: #ef8614;
    }
    .add-btn{
        height: 30px;
        line-height: 30px;
        margin: 20px auto 0;
    }
    .add-btn>div{
        float: left;
        padding: 0 5px;
        margin:0 15px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
    .add-node{
        color: #fff;
        background-color:#ef8614;
    }
    .fill2{
        color:black;
        background-color: #d3d3d3;
    }
</style>
<template>
    <div class="item-view">
        <div class="outline clearfix">
            <div class="static-1">
                <span>版本</span>
                <input :title="data.version" class="static-input3" v-model="data.version" type="text">
            </div>
            <div class="static-2">
                <span>文档名称</span>
                <input :title="data.name"  class="static-input1" v-model="data.name" type="text">
            </div>
            <div class="static-2">
                <span>存储位置</span>
                <input :title="data.location" class="static-input1" v-model="data.location" type="text">
            </div>
            <div class="static-3">
                <span>修改时间</span>
                <input class="static-input2" v-model="data.update_time" type="text">
            </div>
            <span @click="delFill()" class="trash icon-cross"></span>
        </div>
        <span @click="showNode" class="icon-oc icon-paragraph-left">&nbsp{{control}}</span>
        <div v-show="isNode" class="node-view clearfix">
            <div class="node-top">
                <span class="node-top-1">章节</span>
                <span class="node-top-2">内容概述</span>
                <span class="node-top-1">起始页码</span>
                <span class="node-top-1">结束页码</span>
                <span class="node-top-1">操作</span>
            </div>
            <div class="details clearfix" v-for="item in node" track-by="$index">
                <input class="details-1" v-model="item.section" type="text">
                <input :title="item.context" class="details-2" v-model="item.context" type="text">
                <input class="details-1" v-model="item.pstart" @keyup="checklegal($index,'s')" type="number" min="1" :max="item.pend">
                <input class="details-1" v-model="item.pend" @keyup="checklegal($index,'e')" type="number" :min="item.pstart">
                <span class="details-3 icon-left-trash" @click="delNode($index)" ></span>
                <span class="details-3 icon-left-add" @click="addNode($index)" ></span>
            </div>
            <div class="add-btn clearfix">
                <div @click="addNode(-1)" class="add-node">+&nbsp添加新章节</div>
<!--                 <div @click="submit" class="fill2">+&nbsp提交资料</div> -->
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                data:{
                    name:null,
                    version:null,
                    update_time:null,
                    location:null
                },
                node:[],
                isNode:false,
                control:'展开',
                firstOpen:false
            }
        },
        props:{
            num:{
                type:Number,
                default:-1
            }
        },
        ready: function() {
        },
        beforeDestroy: function() {

        },
        methods: {
            showNode:function(){
                let vm=this;
                vm.isNode=!vm.isNode;
                if(vm.isNode){
                    vm.control="收起";
                    vm.getNode();
                }
                else{
                    vm.control="展开";
                }
            },
            // 检验起始页码
           checklegal:function(index,tag){
             let vm=this;
             let v1=parseInt(vm.node[index].pstart);
             let v2=parseInt(vm.node[index].pend);
             if(tag=='s'){
                 if(v1>v2){
                    vm.node[index].pstart=v2;
                 }
             }
             else if(tag=='e'){
                if(v2<v1){
                    vm.node[index].pend=v1;
                }
             }
           },
           addNode:function(pos){
               let vm=this;
               let tmp={
                   section:null,
                   context:null,
                   pstart:1,
                   pend:1
               };
               if(pos==-1){
                  vm.node.push(tmp)
               }
               else{
                  vm.node.splice(pos+1,0,tmp);
               }
           },
           delNode:function(index){
              let vm=this;
              let tmp = vm.node[index];
              vm.node.$remove(tmp);
           },
           delFill:function(){
              this.$dispatch('delFill',this.num)
           },
           getNode:function(){
                let vm=this;
                if(!vm.firstOpen){
                    vm.firstOpen=true;
                }
                let sp=vm.data.step;
                let resource=vm.$resource('docu/getN?step='+sp+'&type='+vm.data.type+'&version='+vm.data.version+'&name='+vm.data.name);
                resource.get().then((response)=>{
                    if(response.data.Code==200){
                        vm.node=response.data.Data;
                    }
                    else{
                        vm.$router.go({path:'./index'})
                    }
                })
            }
        },
        events:{
            save_data:function(num){
                let vm=this;
                if(vm.num==num){
                    let tmp=vm.data;
                    if(vm.firstOpen){
                        tmp['node']=vm.node;
                        vm.$dispatch('save_ok',tmp,vm.num)
                    }
                    else{
                         let sp=vm.data.step;
                         let resource=vm.$resource('docu/getN?step='+sp+'&type='+vm.data.type+'&version='+vm.data.version+'&name='+vm.data.name);
                         resource.get().then((response)=>{
                            if(response.data.Code==200){
                                tmp['node']=response.data.Data;
                                vm.$dispatch('save_ok',tmp,vm.num)
                            }
                            else{
                                vm.$router.go({path:'./index'})
                            }
                        })
                    }
                }
            },
            set_data:function(data,num){
                let vm=this;
                if(vm.num==num){
                    vm.data=data;
                    vm.isNode=false;
                    vm.control='展开';
                    vm.firstOpen=false;
                }
            }
        }
    }
</script>
