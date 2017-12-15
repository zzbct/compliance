<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 评审结果的评审界面
-->
<style scoped>
    .title{
        box-sizing: border-box;
        position: fixed;
        top: 80px;
        height: 60px;
        width: 100%;
        padding: 0 30px;
        line-height: 60px;
        color: red;
        font-size: 20px;
        font-weight: 700;
        background-color: #fff;
        z-index: 100;
    }
    .bar{
        display: inline-block;
        background-color: gray;
        height: 20px;
        width: 50%;
    }
    .b-div{
        float: right;
        margin-right: 6%;
    }
    .back{
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        color: black;
        text-align: center;
        background-color: #cfd6e2;
        cursor: pointer;
        border-radius: 10px;
    }
    .content{
        margin-top:40px;
        box-sizing: border-box;
        width:100%;
    }
    .left-button{
        float: left;
        width: 3%;
        height: 520px;
        font-size: 36px;
        line-height: 520px;
    }
    .right-button{
        float: right;
        width: 3%;
        height: 520px;
        font-size: 36px;
        line-height: 520px;
    }
    .assert{
        box-sizing: border-box;
        float: left;
        width:94%;
        padding: 0 20px;
    }
    .icon-button{
        cursor: pointer;
        color:#9393ff;
    }
    .icon-button:active{
        color:#4a4aff;
    }
    .icon-button1{
        color: #adadad;
    }
    .global-list{
        padding: 20px 0;
        border-bottom: 1px dashed #ccc;
    }
    .assert-list{
        margin-top:20px;
    }
    .assert-permission{
        display:inline-block;
        height: 40px;
        line-height: 40px;
        margin-right: 30px;
    }
    .refer-btn{
        cursor: pointer;
        text-decoration: underline;
        color: darkslateblue;
    }
    .evidence{
        margin-top: 20px;
    }
    .e-model{
        float:left;
        width:30%;
        height:520px;
        border:1px solid #ccc;
    }
    .model-mov-scroll{
        box-sizing: border-box;
        width:100%;
        height:480px;
        border:1px solid #ccc;
        overflow-y: auto;
    }
    .model-item{
        width:100%;
        box-sizing: border-box;
        padding-left: 5px;
        margin-top: 10px;
        height: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .model-child{
        padding-left: 10px;
        margin-top: 10px;
        height: 20px;
    }
    .e-entity{
        float:left;
        width:30%;
        height:520px;
        margin-left: 30px;
    }
    .e-doc{
        width: 100%;
        height: 280px;
        border:1px solid #ccc;
    }
    .e-mov-scroll{
        box-sizing: border-box;
        width:100%;
        height:200px;
        border:1px solid #ccc;
        overflow-y: auto;
    }
    .e-detail{
        margin-top: 20px;
        width:100%;
        height: 220px;
        border:1px solid #ccc;
    }
    .e-detail div{
        line-height: 40px;
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 0 10px;
    }
    .e-detail div input{
        float: right;
        border:1px solid #ccc;
        height: 30px;
        width: 70%;
    }
    .e-detail div textarea{
        float: right;
        border:1px solid #ccc;
        height: 50px;
        width: 70%;
    }
    .move-btn{
        box-sizing: border-box;
        float: left;
        height: 480px;
        padding: 195px 10px;
    }
    .move-btn>button{
        display: block;
        height: 30px;
        margin-bottom: 30px;
        border:none;
        color:black;
    }
    .radio-input{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin-left: 10px;
        padding: 0 10px;
        cursor: pointer;
    }
    .checked{
        background:darkslateblue;
        border-radius: 10px;
        color:#FFF;
    }
    .yes:before,.no:before,.ignore:before{
        content:"";
        display:inline-block;
        width:8px;
        height:8px;
        border-radius: 100%;
        margin:0 5px 0 -5px;
    }
    .no:before{
        background:red;
    }
    .yes:before{
        background: #0f0;
    }
    .ignore:before{
        background:gray;
    }
    .radio-label:after{
        position: absolute;
        content:'';
        top:10px;
        left:0;
        width:10px;
        height:10px;
        background-color: #929dd9;
    }
    .extends{
        float: left;
        box-sizing:border-box ;
        display: inline-block;
        width: 50%;
        height: 100px;
        padding: 10px;
        margin-left:100px;
        margin-right: 20px;
        font-size:14px;
        color: darkslateblue;
        border:1px solid #ccc;
        -moz-box-shadow:0px 3px 5px #e7eaf0 inset;
        -webkit-box-shadow:0px 3px 5px #e7eaf0 inset;
        box-shadow:0px 3px 5px #e7eaf0 inset;
    }
    .btn{
        float: left;
        height: 30px;
        margin-top: 35px;
        padding: 0 20px;
        border:none;
        color:black;
    }
    .e-btn{
        float: left;
        height: 30px;
        padding: 0 20px;
        border:none;
        color:black;
    }
    button:hover{
        color:darkslateblue;
        -moz-box-shadow:0px 3px 5px darkslateblue inset;
        -webkit-box-shadow:0px 3px 5px darkslateblue inset;
        box-shadow:0px 3px 5px darkslateblue inset;
        /*background-color:darkslateblue;*/
    }
    .e-top{
        width:100%;
        height:40px;
        line-height: 40px;
        font-size: 14px;
        font-weight:900;
        text-align: center;
        background-color: #cfd6e2;
    }
    .e-top-name{
        display: inline-block;
        position: relative;
        width:30%;
        height:100%;
        text-align: center;
        font-size: 14px;
        font-weight: 900;
    }
    .e-top-name:after{
        position:absolute;
        content: "";
        top:5px;
        left: 100%;
        width: 2px;
        height:30px;
        background:#fff;
    }
    .e-top-doc{
        box-sizing: border-box;
        width:60%;
        padding: 6px;
        font-size: 14px;
        border:none ;
    }
    .e-produce{
        box-sizing: border-box;
        float:left;
        width:27%;
        height:520px;
    }
    .e-combine{
        box-sizing: border-box;
        width:100%;
        height:520px;
        padding: 10px;
        color: darkslateblue;
        border:1px solid #ccc;
        -moz-box-shadow:0px 3px 5px #e7eaf0 inset;
        -webkit-box-shadow:0px 3px 5px #e7eaf0 inset;
        box-shadow:0px 3px 5px #e7eaf0 inset;
        margin-bottom: 20px;
        overflow: auto;
    }
    .combine-text{
       white-space:nowrap;
       border-bottom: 2px dashed #ccc;
       padding: 5px 0;
        /* white-space: nowrap;
        text-overflow: ellipsis; */
    }
    .combine-text input{
        float:left;
        margin-right: 5px;
    }
    .combine-text div{
        float:left;
        width: 70%;
        
    }
    .combine-text div span{
        display: block;
    }
    .e-area{
        width:100%;
        height:60px;
        margin: 20px 0;
    }
    .e-area-text{
        float: left;
        box-sizing:border-box ;
        display: inline-block;
        width: 63%;
        height: 100%;
        padding: 10px;
        margin-right: 20px;
        font-size:14px;
        color: darkslateblue;
        border:1px solid #ccc;
        -moz-box-shadow:0px 3px 5px #e7eaf0 inset;
        -webkit-box-shadow:0px 3px 5px #e7eaf0 inset;
        box-shadow:0px 3px 5px #e7eaf0 inset;
    }
    .decorate{
        position: relative;
    }
    .decorate:after {
        content: "";
        position: absolute;
        top:150px;
        left:100%;
        width:30px;
        height:1px;
        border-bottom: 1px dashed #ccc;
    }
    .page{
        margin: 30px 0;
    }
    .save{
        position: fixed;
        top: 200px;
        left: 80%;
        width: 20%;
        box-sizing: border-box;
        padding: 20px;
    }
    .save>button{
        box-sizing: border-box;
        font-size: 24px;
        padding: 10px 20px;
        border: none;
        color: black;
    }
    .submit-single{
        margin: 20px 0;
        height: 30px;
        cursor: pointer;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: darkslateblue;
    }
     .red{
        color: #1ed75f;
        cursor: pointer;
    }
    .normal{
         cursor: pointer;
    }
</style>
<template>
    <div class="head">
        <Hnav target="report"></Hnav>
    </div>
    <div class="title">
        {{stage}}-完成度 {{runbar}}
        <div class="bar">
            <div class="list-run-bar" :style="{width:runbar}"></div>
        </div>
       <!--<div class="confuse-num">
           质疑度&nbsp{{data.isConflict}}人
       </div> -->
        <div class="b-div">
            <span @click="backto" class="back">退出评审</span>
        </div>
    </div>
    <div class="content clearfix">
        <div class="left-button">
            <span v-show="id>0" @click="getNext(-1)" title="pre-上一个" class="icon-l-play icon-button"></span>
            <span v-else  title="pre-上一个" class="icon-l-play icon-button1"></span>
        </div>
       <div class="assert">
           <div class="assert-list">
                <span class="zoom-in" v-show="data.customize==1">*自定义</span>
                <span>{{data.checkItem}}</span>
                <span @click="changeState(1)" class="radio-input yes" :class="data.passed==1?'checked':''">YES</span>
                <span @click="changeState(-1)" class="radio-input no" :class="data.passed==-1?'checked':''">NO</span>
                <span @click="changeState(0)" class="radio-input ignore" :class="data.passed==0?'checked':''">IGNORE</span>
                <div class="assert-permission">
                    <!-- <span v-show="passed!=2">原评审人:{{data.lastReviewer}}</span> -->
                    <input v-model="allowModify" type="checkbox">
                    <span>允许查看</span>
                   <!--  <select style="height:25px" v-model="confuse" v-show="passed!=2&&data.lastReviewer!=name">
                       <option value="0" selected>无操作</option>
                       <option v-show="data.isConflict>0&&issub" value="-1">解除质疑</option>
                       <option  v-show="isadd" value="1">添加质疑</option>
                   </select> -->
                </div>
                 <div class="assert-permission">
                    <span class="refer-btn" @click="showRefer">查看他人评审意见</span>
                    <Referwindow :x='x' :y='y' v-show="isRefer" v-ref:refers></Referwindow>
                </div>
            </div>
           <div class="evidence clearfix">
               <div class="e-model decorate">
                   <div class="e-top">
                       证据项
                   </div>
                   <div class="model-mov-scroll">
                       <div :title="model.eviItem" class="model-item" v-for="model in modelItem">
                           <input v-model="models" :value="model" type="checkbox">
                           <span @click="sift(model)" :class="model.isExist==1?'red':''" >{{model.eviItem}}</span>
                       </div>
                   </div>
               </div>
               <div class="e-entity">
                   <div class="e-doc">
                       <div class="e-top">
                           <span class="e-top-name">文档类型</span>
                           <select  @change="getFiles()" v-model="curType" class="e-top-doc">
                               <option :value="ware" v-for="ware in wareType" track-by="$index">{{ware}}</option>
                           </select>
                       </div>
                       <div class="e-top">
                           <span class="e-top-name">文档实体</span>
                           <select  @change="getNodes()" v-model="curDoc" class="e-top-doc">
                               <option :value="doc" v-for="doc in docs" track-by="$index">{{doc}}</option>
                           </select>
                       </div>
                       <div class="e-mov-scroll scroll">
                           <div class="model-item" v-for="node in nodes">
                               <input v-show="passed==2||data.lastReviewer==name||permit==1" v-model="chapter" :value="node" type="radio">
                               <input v-else type="radio" readonly>
                               <span>{{node.Section}}&nbsp{{node.Title}}&nbsp{{node.PageFrom}}-{{node.PageEnd}}</span>
                           </div>
                       </div>
                   </div>
                   <div class="e-detail">
                       <div class="e-top">
                           <span class="e-top-name">具体内容</span>
                       </div>
                        <div>
                           <span>起始页:</span>
                           <input v-model="startpage"  @keyup="checklegal('s')" type="number" min="1" :max="endpage">
                       </div>
                       <div>
                          <span>结束页:</span>
                          <input v-model="endpage" @keyup="checklegal('e')" type="number" :min="startpage"> 
                       </div>
                       <div>
                           <span>细节说明:</span>
                           <textarea v-model="details"></textarea>
                       </div>
                   </div>
               </div>
               <div class="move-btn">
                   <button @click="moveIn(index)">移入 - &gt </button>
                   <button @click="moveOut(index)"> &lt - 移出</button>
                 </div>
               <div class="e-produce">
                   <div class="e-combine scroll">
                       <div class="combine-text clearfix" v-for="combine in ceviForm">
                           <input v-model="removeSet" :value="combine" type="checkbox">
                           <div>
                               <span>证据项:{{combine.eviItem}}</span>
                               <span>文档类型:{{combine.evilist[0].type}}</span>
                               <span>文档名称:{{combine.evilist[0].name}}</span>
                               <span>章节:{{combine.evilist[0].chapter}}</span>
                               <span>起始页:{{combine.evilist[0].startPage}}</span>
                               <span>结束页:{{combine.evilist[0].endPage}}</span>
                               <span>细节说明:{{combine.evilist[0].details}}</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div>
               <div class="e-area clearfix">
                <div style="float:left;padding-top: 10px;">处理意见：</div>
                  <textarea class="e-area-text" v-model="improves" :value="data.improve" placeholder="输入处理意见..."></textarea>
                   <button @click="reset_advices" class="e-btn">撤销</button>
               </div>
               <div class="e-area clearfix">
                   <div style="float:left;padding-top:10px;">潜在问题：</div>
                   <textarea class="e-area-text" v-model="matters" :value="data.matter" placeholder="输入潜在问题..."></textarea>
                   <button @click="reset_matters" class="e-btn">撤销</button>
               </div>
               <div class="e-area clearfix">
                   <div style="float:left;padding-top:10px;">断言依据：</div>
                   <textarea class="e-area-text" v-model="exts" :value="data.comment" placeholder="输入断言依据..."></textarea>
                   <button @click="reset_extends" class="e-btn">撤销</button>
               </div>
           </div>
           <div @click="post_data()" class="submit-single">提交</div>
       </div>
       <div class="right-button">
           <span @click="getNext(1)" title="next-下一个" class="icon-r-play icon-button"></span>
       </div>
    </div>
</template>
<script>
    import hnav from '../components/hnav.vue';
    import referwindow from '../components/refers.vue';
    import $ from 'jquery';
    import Vue from 'vue';
    module.exports = {
        data: function() {
            return {
                id:0,
                // 存储问题项、评审结果、实体证据
                data:{},
                // 存储该问题涉及的数据项
                modelItem:{},
                // 存储被选中的数据项，与文档为n:1
                models:[],
                // 存储该问题涉及的制品类型
                wareType:[],
                // 存储单制品类型下的所有文档
                docs:{},
                // 存储单文档下的目录结构
                nodes:{},
                // 所选制品类型
                curType:'',
                // 所选文档名称
                curDoc:'',
                // 记录comment
                exts:"",
                improves:"",
                matters:"",
                //存储要移除的关联项
                removeSet:[],
                //存储要移入地关联关系--models
                docName:null,
                docType:null,
                chapter:{},
                startpage:1,
                endpage:1,
                details:null,
                stage:null,
                siftId:0,
                ceviForm:[],
                permit:0,
                allowModify:false,
                passed:2,
                address:'',
                evidence:[],
                //post数据
                evidence1:[],
                adr:$CONFIG.appyw,
                confuse:0,
                name:null,
                isadd:true,
                issub:true,
                 // 控制查看他人评审意见
                isRefer:false,
                x:0,
                y:0
            }
        },
        components:{
            Hnav:hnav,
            Referwindow:referwindow
        },
        computed:{
            runbar:function(){
                let vm=this;
                let size=vm.modelItem.length;
                let exist=0;
                for(let i=0;i<size;i++){
                    let unit=vm.modelItem[i];
                    if(unit.isExist==1){
                        exist++;
                    }
                }
                let percent = Math.round(exist / size * 100)+'%';
                return (percent == 'NaN%') ? '0%' : percent;
            }
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
               localStorage.setItem('listType','rplist');
               vm.name=localStorage.getItem('UserName');
               vm.id=parseInt(localStorage.getItem('listId'));
               vm.stage=localStorage.getItem('stage');
               vm.getListdata(vm.id);
               vm.getModelitem(vm.id);
               vm.getType(vm.id);
           }
        },
        beforeDestroy: function() {

        },
        methods: {
          // 显示他人评审意见
            showRefer:function(e){
                let vm=this;
                if(vm.isRefer){
                    vm.isRefer=false;
                }
                else{
                    e.stopPropagation();
                    vm.isRefer=true;
                    vm.x=e.target.offsetLeft;
                    vm.y=e.target.offsetTop+e.target.offsetHeight+8;
                    vm.$refs.refers.$emit('render_data',vm.id);
                }
            },
             // 检验起始页码
           checklegal:function(tag){
             let vm=this;
             let v1=parseInt(vm.startpage);
             let v2=parseInt(vm.endpage);
             if(tag=='s'){
                 if(v1>v2){
                    vm.startpage=v2;
                 }
             }
             else if(tag=='e'){
                if(v2<v1){
                    vm.endpage=v1;
                }
             }
           },
            // 搜索证据项已填写的实际关联
            sift:function(obj){
                let vm=this;
                vm.ceviForm=$.extend(true,[],vm.data.eviForm);
                if(obj.eviID==vm.siftId){
                    vm.siftId=0;
                    return;
                }
                else{
                    vm.siftId=obj.eviID;
                    let len=vm.ceviForm.length;
                    for(let i=0;i<len;i++){
                        let unit=vm.ceviForm[i];
                        if(unit.eviItem!=obj.eviItem){
                            vm.ceviForm.$remove(unit);
                            len--;
                            i--;
                        }

                    }
                }
            },
            // 更改状态
            changeState:function(state){
                let vm=this;
                if(vm.data.passed==state){
                    vm.data.passed=2;
                }
                else{
                    vm.data.passed=state;
                }
            },
            // 获取问题清单
            getListdata:function(id){
                let vm=this;
                let resource=vm.$resource(vm.adr+'review/getItemForm?RefRItem='+id);
                resource.get().then((response)=>{
                   if(response.data.code==200){
                      let obj=response.data.ItemForm[0];
                       vm.data=vm.proListdata(obj);
                       vm.ceviForm=$.extend(true,[],vm.data.eviForm);
                       vm.permit=vm.data.allowModify;
                       vm.passed=vm.data.passed;
                       if(vm.data.allowModify==1){
                          vm.allowModify=true;
                       }
                       else{
                          vm.allowModify=false;
                       }
                   }
                   else{
                     vm.$router.go({path:'./index'});
                   }
                })
            },
            // 对拿到的数据预处理
            proListdata:function(origin){
                let obj=origin.eviForm;
                let len=obj.length;
                for(let i=0;i<len;i++){
                    let unit=obj[i];
                    let elen=unit.evilist.length;
                     let tmp={
                      eviID:unit.eviID,
                      eviItem:unit.eviItem,
                      evilist:[]
                    };
                    tmp.evilist.push(unit.evilist[0]);
                    obj.$set(i,tmp);
                    if(elen>1){
                        for(let j=1;j<elen;j++){
                           let tmp={
                              eviID:unit.eviID,
                              eviItem:unit.eviItem,
                              evilist:[]
                           };
                           tmp.evilist.push(unit.evilist[j]);
                           obj.push(tmp);
                        }
                    }
                }
                return origin;
            },
            // 获取证据项
            getModelitem:function(id){
                let vm=this;
                let resource=vm.$resource(vm.adr+'review/getEviStatistics?RefRItem='+id);
                resource.get().then((response)=>{
                   if(response.data.code==200){
                      vm.modelItem=response.data.Evis;
                   }
                   else{
                      vm.$router.go({path:'./index'});
                   }
                })
            },
            // 获取该问题涉及的制品类型
            getType:function(id){
                let vm=this;
                let resource=vm.$resource('rItem/dataitem?id='+id+'&stage='+vm.stage);
                resource.get().then((response)=>{
                   if(response.data.Code==200){
                      vm.wareType=response.data.Data;
                   }
                   else{
                      vm.$router.go({path:'./index'});
                   }
                })
            },
            // 获取某一制品类型下的文档集合
            getFiles:function(){
                let vm=this;
                let stage=localStorage.getItem('stage');
                let resource=vm.$resource('docu/name?stage='+stage+'&type='+vm.curType);
                resource.get().then((response)=>{
                   if(response.data.Code==200){
                       vm.docs=response.data.Data;
                   }
                   else{
                      vm.$router.go({path:'./index'});
                   }
                })
            },
            // 获取单文档的目录结构
            getNodes:function () {
                let vm=this;
                let resource = vm.$resource('content/getByN?name='+vm.curDoc+'&type='+vm.curType);
                resource.get()
                    .then((response) => {
                       if(response.data.Code==200){
                          vm.$set('nodes',response.data.Content);
                       }
                       else{
                          vm.$router.go({path:'./index'});
                       }
                    })
                    .catch(function(response) {
                        console.log(response)
                    })
            },
            // 记录comment
            reset_extends:function () {
                let vm =this;
                vm.exts=vm.data.comment;
            },
             // 记录comment
            reset_advices:function () {
                let vm =this;
                vm.improves=vm.data.improve;
            },
             // 记录comment
            reset_matters:function () {
                let vm =this;
                vm.matters=vm.data.matter;
            },
            // 添加新的关联
            moveIn:function (index) {
                let vm=this;
                let len=vm.models.length;
                for(let i=0;i<len;i++){
                    let unit=vm.models[i];
                    let tmp={
                        eviID:unit.eviID,
                        eviItem:unit.eviItem,
                        evilist:[{
                            type:vm.curType,
                            name:vm.curDoc,
                            chapter:vm.chapter.Section,
                            startPage:vm.startpage,
                            endPage:vm.endpage,
                            details:vm.details
                        }]
                    };
                    vm.data.eviForm.push(tmp);
                    let milen=vm.modelItem.length;
                    for(let j=0;j<milen;j++){
                        let munit=vm.modelItem[j];
                        if(unit.eviItem==munit.eviItem){
                            munit.isExist=1;
                            continue;
                        }
                    }
                }
                vm.ceviForm=$.extend(true,[],vm.data.eviForm);
                vm.finit();
            },
            // 移除关联
            moveOut:function () {
               let vm=this;
               let flag;
               let data=vm.data.eviForm;
               for(let unit of vm.removeSet){
                   let len=data.length;
                   for(let i=0;i<len;i++){
                     if(unit.eviItem==data[i].eviItem){
                        data.$remove(data[i]);
                        len--;
                        i--;
                     }
                   }
                   vm.ceviForm.$remove(unit);
               }
               let milen=vm.modelItem.length;
               for(let j=0;j<milen;j++){
                    flag=0;
                    let munit=vm.modelItem[j];
                    for(let unit of vm.data.eviForm){
                        if(unit.eviItem==munit.eviItem){
                            munit.isExist=1;
                            flag=-1;
                            continue;
                        }
                    }
                    if(flag==0){
                      munit.isExist=0;
                    }
                }
                vm.finit();
            },
            // 数据初始化
            finit:function () {
                let vm=this;
                vm.models=[];
                vm.nodes=null;
                vm.curDoc=null;
                vm.curType=null;
                vm.chapter="";
                vm.startpage=null;
                vm.endpage=null;
                vm.details=null;
                vm.removeSet=[];
                vm.siftId=0;
            },
            // 获取上/下一条数据
            getNext:function(dir){
               let vm=this;
               let news;
               let pos=parseInt(localStorage.getItem('listPos'));
               let idset=JSON.parse(localStorage.getItem('idSet'));
               let len=idset.length;
               let index;
               if(pos==0){
                  if(dir==-1){
                    index=len-1;
                  }
                  else{
                    index=pos+dir;
                  }
               }
               else if(pos==len-1){
                  if(dir==1){
                    index=0;
                  }
                  else{
                    index=pos+dir;
                  }
               }
               else{
                  index=pos+dir;
               }
               news=idset[index];
               vm.getListdata(news);
               vm.getModelitem(news);
               vm.getType(news);
               localStorage.setItem('listId',news);
               localStorage.setItem('listPos',index)
            },
            post_data:function(){
                let vm=this;
                if(vm.data.passed==2){
                     confirm('未添加评审意见,无法提交');
                }
                else{
                    let address=vm.adr+'review/updateItemForm';
                    let rnode=localStorage.getItem('rnode');
                    vm.data.comment=vm.exts;
                    vm.data.improve=vm.improves;
                    vm.data.matter=vm.matters;
                    if(vm.improves==''){
                        vm.data.improveStatus=0;
                    }
                    else{
                        vm.data.improveStatus=1;
                    }
                    if(vm.matters==''){
                        vm.data.matterStatus=0;
                    }
                    else{
                        vm.data.matterStatus=1;
                    }
                    if(vm.data.lastReviewer==vm.name||vm.permit==1||vm.passed==2){
                        vm.data.lastReviewer=vm.name;
                        vm.data.allowModify=vm.allowModify?1:0;
                         vm.confuse=0;
                    }
                    let tmp=[];
                    let atr=$.extend(true,{},vm.data);
                    atr.isConflict=vm.confuse;
                    tmp.push(atr);
                    vm.$http.post(address,tmp)
                            .then((response) => {
                                if(response.data.Code==200){
                                    confirm('成功');
                                     if(vm.confuse==1){
                                        vm.isadd=false;
                                        vm.issub=true;
                                    }
                                    else if(vm.confuse==-1){
                                        vm.issub=false;
                                        vm.isadd=true;
                                    }
                                    vm.confuse=0;
                                    vm.finit();
                                    vm.getListdata(vm.id);
                                    vm.getModelitem(vm.id);
                                    vm.getType(vm.id);
                                    if(rnode=='undefined'){
                                        rnode=vm.stage+'='+vm.id+'='+vm.data.checkItem;
                                    }
                                    else{
                                        rnode+=','+vm.stage+'='+vm.id+'='+vm.data.checkItem;
                                    }
                                    localStorage.setItem('rnode',rnode);
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
            // 退出评审
            backto:function(){
                this.$router.go({path:'./report'});
            }
        }
    }
</script>