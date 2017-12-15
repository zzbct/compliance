<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: dr自定义添加问题清单
-->
<style scoped>
    .view{
        margin-top: 80px;
        width: 100%;
        height: auto;
        min-height: 800px;
        background-color: #ddd;
        padding: 20px 0;
    }
    .step{
      margin:40px 5%;
      background-color: rgba(1, 180, 104,0.5);
    }
    .step-body{
        margin: 20px 30px;
    }
    .list{
        height: 60px;
        line-height: 60px;
    }
    .list>select{
        width: 15%;
        height: 35px;
    }
    .list>input{
        box-sizing: border-box;
        width: 70%;
        height: 35px;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .tool{
      margin: 10px 0;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px dashed black;
    }
    .tool-active{
      color:#ef8614;
    }
    .data{
      padding-left: 20px;
    }
    .data>div{
        height: 60px;
        line-height: 60px;
    }
    .data input[type="text"]{
        box-sizing: border-box;
        width: 70%;
        height: 35px;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .actives{
      cursor: pointer;
      padding: 8px;
      color: black;
      background-color: #ef8614;
      border-radius: 10px;
    }
    .sleeps{
      padding: 8px;
      color:gray;
    }
    .btn{
      width:150px;
      height: 30px;
      line-height: 30px;
      color: black;
      background-color: #ef8614;
      margin: 10px;
    }
    .footer{
      padding: 0 5%;
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
      color: rgb(1, 180, 104);
      cursor: pointer;
    }
    .pres{
      cursor: pointer;
      font-size: 16px;
      color: rgb(1, 180, 104);
      line-height: 40px;
    }
</style>
<template>
    <div class="header">
        <Hnav></Hnav>
    </div>
    <div class="view">
      <div class="title-guideline"  style="padding:0 30px">
        <span @click="cancel('baseinfo')" title="返回到上一阶段" class="icon-l-play pres"></span>
        自定义检查单
        <span @click="refresh" title="刷新" class="reload icon-reload"></span>
      </div>
      <div class="step scroll">
         <div class="step-body clearfix" v-for="(index,item) in data">
             <div class="list">
                  <span>{{index+1}}</span>
                  <select v-model="item.Stage">
                     <option v-for="sitem in step">{{sitem}}</option>
                 </select>
                 <input :title="item.CheckItem" v-model="item.CheckItem" type="text" placeholder="问题描述">
                 <span @click="dellist(index)" class="icon-cross"></span>
             </div>
             <div class="tool">
                <span>证据项</span>
                <span :class="item.checkSet.length?'actives':'sleeps'" @click="delAlldata(index)">删除</span>
             </div>
             <div>
                 <input @change="enable(index)" v-model="item.isroot" type="checkbox">&nbsp全部
                 <span @click="opens(index)" title="展开" style="cursor: pointer" v-show="!states[index]">+</span>
                 <span @click="closes(index)" title="收起" style="cursor: pointer" v-else>-</span>
                 <span v-if="item.eviItem.length==0" @click="addDataItem(index)" class="icon-left-add"></span>
                 <div v-if="states[index]" class="data">
                      <div v-for="ditem in item.eviItem" track-by="$index">
                         <input v-model="item.checkSet" :value="item.eviItem[$index]" type="checkbox">
                         <input v-model="item.eviItem[$index]" type="text" placeholder="相关证据项">
                         <span @click="delDataItem(index,$index)" class="icon-left-trash"></span>
                         <span v-if="$index==item.eviItem.length-1&&item.eviItem[$index]!=''" @click="addDataItem(index)" class="icon-left-add"></span>
                     </div>
                 </div>
              </div>
         </div>
         <div>
             <button class="btn" @click="addlist">添加新问题</button>
         </div>
      </div>
      <div class="footer">
         <button class="footer-btn" @click="postdata">确定</button>
         <button class="footer-btn" @click="cancel('home')">取消</button>
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
                data:[],
                step:['SOI1','SOI2','SOI3','SOI4'],
                states:[]
            }
        },
        components:{
            Hnav:hnav
        },
        ready:function(){
          let v1=localStorage.getItem('key');
          let v2=localStorage.getItem('id');
          if(v1==undefined || v2==undefined){
              this.$router.go({path:'./index'});
          }
          else{
              Vue.http.headers.common.Auth = v1;
              Vue.http.headers.common.ID= v2;
              this.getdata();
          }
        },
        beforeDestroy: function() {

        },
        methods: {
            /*刷新数据*/
            refresh:function(){
              this.getdata();
            },
            /*----批量操作----start*/
            enable:function(index){
              let vm=this;
              let data=vm.data[index];
              if(data.isroot){
                 data.checkSet=data.eviItem;
              }
              else{
                 data.checkSet=[];
              }
            },
            delAlldata:function(index){
              let vm=this;
              let data=vm.data[index];
              if(data.checkSet.length){
                if(confirm("确定删除？删除后新增的内容不可找回")){
                  for(let unit of data.checkSet){
                    let tmp=data.eviItem;
                    tmp.$remove(unit);
                  }
                  data.checkSet=[];
                  data.isroot=false;
                }
              }
            },
           /*----批量操作----end*/
           /* ----单一添加|删除问题描述或证据项start----*/
           addlist:function(){
              let vm=this;
              vm.data.push({Stage:'SOI1',CheckItem:'',eviItem:[''],checkSet:[],isroot:false});
           },
           dellist:function(index){
              let vm=this;
              let tmp=vm.data[index];
              vm.data.$remove(tmp);
           },
           addDataItem:function(index){
              let vm=this;
              vm.data[index].eviItem.push("");
           },
           delDataItem:function(pindex,pos){
              let vm=this;
              let unit=vm.data[pindex].eviItem;
              let tmp=unit[pos];
              unit.$remove(tmp);
           },
           /* ----添加|删除end----*/
           /* ----展开|收起证据项start----*/
           opens:function(index){
               let vm=this;
               vm.states.$set(index,true);
           },
           closes:function(index){
               let vm=this;
               vm.states.$set(index,false);
           },
           /* ----展开|收起证据项end----*/
           /*get数据后对数据定制*/
           changedata:function(obj){
              let vm=this;
              for(let i=0;i<obj.length;i++){
                vm.states.push(false);
              }
              for(let i=0;i<obj.length;i++){
                let tmp=obj[i];
                tmp['checkSet']=[];
                tmp['isroot']=false;
              }
              return obj;
           },
           /*提交前数据标准化*/
           prodata:function(obj){
            let len=obj.length;
            for(let unit of obj){
              delete(unit.checkSet);
              delete(unit.isroot);
            }
            return obj;
           },
           /*获取数据*/
           getdata:function(){
            let vm=this;
            let resource=vm.$resource('rItem/getCus');
              resource.get().then((response)=>{
                   if(response.data.Code==200){
                      vm.data=vm.changedata(response.data.Data);
                   }
                   else{
                      vm.$router.go({path:'./index'});
                   }
              })
           },
           /*提交数据*/
           postdata:function(){
              let vm=this;
              let data=vm.prodata(vm.data);
              vm.$http.post('rItem/update',data)
                      .then((response) => {
                          if(response.data.Code==200){
                              confirm('成功');
                              vm.$router.go({path:'./doc'});
                          }
                          else{
                              vm.$router.go({path:'./index'});
                          }
                      })
                      .catch(function(response) {
                          console.log(response)
                       })
           },
           cancel:function(path){
              this.$router.go({path:'./'+path});
           }
        }
    }
</script>
