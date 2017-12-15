<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 数据准备界面
-->
<style scoped>
    .view{
        width: 100%;
        min-height:1000px;
        background-color: #ddd;
    }
    .base-info{
        margin-top: 120px;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 30px;
        background-color: #ddd;
    }
    .infos{
        width: 100%;
        background-color: #fff;
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
    .top>div{
    	display: inline-block;
    }
    .top div select{
    	height: 30px;
    	padding: 0 5px;
    }
    .content{
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
    }
    .static{
        float:left;
        margin-bottom: 20px;
    }
    .static span{
        display: inline-block;
        box-sizing: border-box;
        height:40px;
        min-width: 125px;
        padding: 0 10px;
        line-height: 40px;
        text-align: left;
        background-color: #d3d3d3;
    }
    .static input{
        display: inline-block;
        padding: 0 10px;
        width:100px;
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
    }
    .static select{
        width:100px;
        height:40px;
        padding: 0 10px;
        line-height: 40px;
        border: 1px solid #ccc;
    }
    .fill-view{
    	float:left;
        box-sizing: border-box;
        padding-left: 65px;
    }
    .footer{
        padding: 0 30px;
        margin-bottom: 30px;
        background-color: #ddd;
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
    .add-fill{
        height: 30px;
        line-height: 30px;
        margin: 20px auto 0;
    }
    .add-fill>div{
    	float: left;
    	padding: 0 5px;
    	margin:0 15px;
    	font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
    .fill1{
    	color: #fff;
    	background-color:black;
    }
    .fill2{
        color:black;
        background-color: #d3d3d3;
    }
    .favor{
    	display: inline-block;
    	box-sizing: border-box;
        height:30px;
        padding: 0 5px;
        cursor: pointer;
        padding: 0 10px;
        margin-right:20px;
        line-height: 30px;
        text-align: left;
        border-radius: 8px;
        background-color: #d3d3d3;
    }
    .lfavor{
        display: inline-block;
        box-sizing: border-box;
        height: 30px;
        padding: 0 5px;
        cursor: pointer;
        padding: 0 10px;
        margin-right: 20px;
        line-height: 30px;
        text-align: left;
        color: #fff;
        border-radius: 8px;
        background-color: #930093;
    }
    .reload{
        font-size: 16px;
        color: #930093;
        cursor:pointer;
    }
    .pres{
      cursor: pointer;
      font-size: 16px;
      color: #930093;
      line-height: 40px;
    }
</style>
<template>
    <div class="view">
        <div class="header">
            <Hnav></Hnav>
        </div>
        <div class="title-guideline"  style="padding:0 30px">
            <span @click="cancel('drlist')" title="返回到上一阶段" class="icon-l-play pres"></span>
            资料准备
            <span @click="refresh" class="reload icon-reload"></span>
        </div>
        <div class="base-info">
            <div class="infos">
                <div class="top">&gt&gt&nbspSOI#{{step+1}}资料
                    <div>
                        <select  @change="getInfo()" v-model="dtype">
                            <option :title="item.FileType" :value="item.Shorthand" v-for="item in typeSet[step]">{{item.Shorthand}}</option>
                        </select>
                    </div>
                    <div v-for="edited in favor" track-by="$index">
                        <span @click="exrefresh_fill(edited)" :class="dtype==edited?'lfavor':'favor'">{{edited}}</span>
                    </div>
                </div>
                <div class="content clearfix">
                    <template v-for="item in fills" track-by="$index">
                        <div v-show="item==1" class="fill">
                            <Docitem :num='$index'></Docitem>
                        </div>
                    </template>
                    <div class="add-fill clearfix">
                        <div @click="addFill" class="fill1">+&nbsp添加新资料</div>
                        <div @click="submit" class="fill2">+&nbsp提交{{dtype}}相关资料</div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="footer">
            <button v-show="step<3" @click="next(1)" class="footer-btn">下一步</button>
            <button v-show="step>0" @click="next(-1)" class="footer-btn">上一步</button>
            <button @click="nextpage" class="footer-btn">确定</button>
            <button @click="cancel('home')" class="footer-btn">取消</button>
        </div>
    </div> 
</template>
<script>
    import hnav from '../components/hnav.vue';
    import docitem from '../components/docitem.vue';
    import $ from 'jquery';
    import Vue from 'vue';
    module.exports = {
        data: function() {
            return {
                fills:[],
                step:0,
                dtype:"",
                typeSet:[],
                favor:[],
                origin:[],
                scount:0,
                clen:0
            }
        },
        components:{
            Hnav:hnav,
            Docitem:docitem
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
               vm.refresh();
           }
        },
        beforeDestroy: function() {

        },
        methods: {
            refresh:function(){
                let vm=this;
                vm.getFavor();
                vm.getType();
            },
            // 从后台获取单个阶段的favor/get
            getFavor:function(){
                let vm=this;
                vm.favor=[];
                let sp=vm.step+1;
                let resource=vm.$resource('favor/get?step='+sp);
                resource.get().then((response)=>{
                    if(response.data.Code==200){
                        vm.favor=response.data.favor;
                    }
                    else{
                        vm.$router.go({path:'./index'});
                    }
                })
            },
            // 从后台获取soi1-soi4的资料类型http://192.168.109.150:8080/fType/get
            getType:function(){
                let vm=this;
                let resource=vm.$resource('fType/get');
                resource.get().then((response)=>{
                    if(response.data.Code==200){
                        let data=response.data;
                        vm.typeSet.$set(0,data.SOI1);
                        vm.typeSet.$set(1,data.SOI2);
                        vm.typeSet.$set(2,data.SOI3);
                        vm.typeSet.$set(3,data.SOI4);
                        let step=vm.step;
                        let tmp=vm.typeSet[step];
                        vm.dtype=tmp[0].Shorthand;
                        vm.getInfo();
                    }
                    else{
                        vm.$router.go({path:'./index'});
                    }
                })
            },
// 从后台获取soi-soi4资料信息 http://192.168.109.150:8080/docu/get?step=1&type=PSAC
            getInfo:function(){
                let vm=this;
                let sp=vm.step+1;
                let resource=vm.$resource('docu/get?step='+sp+'&type='+vm.dtype);
                resource.get().then((response)=>{
                    if(response.data.Code==200){
                        vm.getFavor();
                        vm.origin=response.data.Data;
                        vm.refresh_fill();
                    }
                    else{
                        vm.$router.go({path:'./index'})
                    }
                })
            },
            // 以数组元素作为对象键值
            getKey : function(obj,key){
                let vm=this;
                return obj[key];
            },
            setKey : function(obj,key,value) {
                obj[key] = value;
                return;
            },
            addFill:function(){
            	let vm=this;
            	vm.fills.push(1);
                vm.clen++;
            },
            exrefresh_fill:function(extype){
                let vm=this;
                vm.dtype=extype;
                vm.getInfo();
            },
            // 更换资料类型后更换数据填充,index指代资料类型数组中的索引值
            refresh_fill:function(){
                let vm=this;
                vm.clen=0;
                vm.fills=[];
                let data=vm.origin;
                if(data==undefined){
                    return;
                }
                let len=data.length;
                for(let i=0;i<len;i++){
                    if(data[i]==undefined){
                        vm.fills.push(-1);
                        continue;
                    }
                    vm.fills.push(1);
                    vm.clen++;
                }
                vm.$nextTick(()=>{
                    for(let i=0;i<len;i++){
                        if(vm.fills[i]==-1){
                            continue;
                        }
                        vm.$broadcast('set_data',data[i],i);
                    }
                })
            },
            // 提交某一资料类型的数据
            submit:function(){
            	let vm=this;
                let len=vm.fills.length;
                vm.origin=[];
                if(vm.clen==0){
                    if(confirm("内容为空，确认提交?")){
                        vm.posInfo();
                    }
                    else{
                        return;
                    }
                }
                else{
                    for(let i=0;i<len;i++){
                        if(vm.fills[i]==-1){
                            vm.origin.$set(i,{});
                            continue;
                        }
                        vm.$broadcast("save_data",i);
                    }
                }
            },
            // 点击确定
            nextpage:function () {
                 this.$router.go({path:'./SOI1'});
            },
            // 上|下一步
            next:function(dir){
                let vm=this;
                vm.step+=dir;
                let unit=vm.typeSet[vm.step];
                vm.dtype=unit[0].Shorthand;
                vm.getInfo();
            },
            pro1:function(data,index){
                let vm=this;
                let arr=vm.origin;
                arr.$set(index,data);
            },
            pro4:function (obj) {
               let len=obj.length;
               for(let i=0;i<len;i++){
                if(obj[i]==undefined){
                    obj.$remove(obj[i]);
                    len--;
                    i--;
                }
               }
               return obj;
            },
            // 将soi1-soi4资料信息传递给后台
            posInfo:function(){
                let vm=this;
                let sp=vm.step+1;
                let tydata=[];
                if(vm.origin.length){
                    tydata=vm.pro4(vm.origin);
                }
                vm.$http.post('docu/update?step='+sp+'&type='+vm.dtype, tydata)
                    .then((response) => {
                        if(response.data.Code==200){
                            vm.getFavor();
                            vm.getInfo();
                            confirm("添加成功~可继续操作或更换资料类型");
                        }
                        else{
                            vm.$router.go({path:'./index'});
                        }
               })
            },
           cancel:function(path){
              this.$router.go({path:'./'+path});
           }
        },
        events:{
            delFill:function(index){
            	let vm=this;
            	vm.fills.$set(index,-1);
                vm.clen--;
                /*let data=vm.origin;
                vm.origin.$remove(data[index]);*/
            },
            // 存储某一资料类型的数据，data指该类型文档中的第index个文档
            save_ok:function(data,index){
                let vm=this;
                vm.scount++;
                vm.pro1(data,index);
                // vm.origin.push(data);
                if(vm.scount==vm.clen){
                    vm.scount=0;
                    vm.posInfo();
                }
            }
        }
    }
</script>
