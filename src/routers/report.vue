<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 评审结果界面
-->
<style scoped>
    .base-info{
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
    .goal{
        padding: 30px 0;
    }
    .text-area{
        float: left;
        box-sizing:border-box ;
        display: inline-block;
        width: 50%;
        height: 100px;
        padding: 10px;
        margin-left:50px;
        margin-right: 20px;
        font-size:14px;
        color: darkslateblue;
        border:1px solid #ccc;
        -moz-box-shadow:0px 3px 5px #e7eaf0 inset;
        -webkit-box-shadow:0px 3px 5px #e7eaf0 inset;
        box-shadow:0px 3px 5px #e7eaf0 inset;
    }
    .text-btn{
        float: left;
        height: 30px;
        margin-top: 35px;
        padding: 0 20px;
        border:none;
        color:black;
    }
    .text-btn:hover{
        color:darkslateblue;
        -moz-box-shadow:0px 3px 5px darkslateblue inset;
        -webkit-box-shadow:0px 3px 5px darkslateblue inset;
        box-shadow:0px 3px 5px darkslateblue inset;
    }
    .log{
        box-sizing: border-box;
        padding: 50px;
    }
    .log-th{
        box-sizing: border-box;
        width:100%;
        height:40px;
        padding: 0 10px;
        line-height: 40px;
        background-color: #5e7a88;
        color: #fff;
        /* background: -webkit-linear-gradient(left, #cfd6e2,#ddd);
        background: -moz-linear-gradient(left, #cfd6e2,#ddd);
        background: -o-linear-gradient(left, #cfd6e2,#ddd);
        background: -ms-linear-gradient(left, #cfd6e2,#ddd);
        background: linear-gradient(left, #cfd6e2,#ddd);
        filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=1,startColorStr=#cfd6e2,,endColorStr= #ddd); */
    }
    .log-th>span{
        display: inline-block;
        font-size: 14px;
        text-align: center;
    }
    .log-wd{
        box-sizing: border-box;
        width:100%;
        max-height: 320px;
        overflow-y: auto;
        background-color: #fff;
        border-left: 1px solid #cfd6e2;
        border-right: 1px solid #cfd6e2;
    }
    .log-td{
        box-sizing: border-box;
        width:100%;
        height:40px;
        padding: 0 10px;
        line-height: 40px;
        border-bottom: 1px solid #cfd6e2;
    }
    .log-td>span{
        display: inline-block;
        font-size: 14px;
        text-align: center;
    }
    .rw-span{
        position: relative;
    }
    .rw-span:after{
        position: absolute;
        content: "";
        top:10px;
        left:0;
        width:2px;
        height:30px;
        background: #fff;
    }
    .rw-person{
        width:10%;
    }
    .rw-identity{
        width:15%;
    }
    .rw-recent{
        width:15%;
    }
    .rw-node{
        width:55%;
    }
    .rw-node-div{
        width:55%;
        display: inline-block;
        padding: 0 10px;
    }
    .link-id{
        color:#00dfb9;
        font-weight: 900;
        margin-right: 10px;
        text-decoration:underline;
        cursor: pointer;
    }
    .static-id{
        font-weight: 900;
        margin-right: 10px;
    }
    .chart{
        width:100%;
    }
    .tchart{
        float: left;
        width:30%;
    }
    .tchart-btn{
        float: left;
        margin-top: 3%;
        margin-left: 10px;
    }
    .tchart-btn>span{
        display: block;
        position: relative;
        margin: 20px;
        padding: 5px;
        cursor: pointer;
    }
    .tchart-btn-lock{
        display: block;
        color:#fff;
        background-color: #f7c106;
    }
    .cbtn-0:before{
        position: absolute;
        content: '';
        top: 12px;
        left: -15px;
        width: 8px;
        height: 8px;
        background: #43a3fa;
    }
    .cbtn-1:before{
        position: absolute;
        content: '';
        top: 12px;
        left: -15px;
        width: 8px;
        height: 8px;
        background: #f8d249;
    }
    .cbtn-2:before{
        position: absolute;
        content: '';
        top: 12px;
        left: -15px;
        width: 8px;
        height: 8px;
        background: #a4f089;
    }
    .cbtn-3:before{
        position: absolute;
        content: '';
        top: 12px;
        left: -15px;
        width: 8px;
        height: 8px;
        background: #fe7847;
    }
    .schart{
        float: left;
        width: 55%;
        margin-top: 6%;
    }
    .cir{
        float: left;
        margin-left: 4%;
        width: 20%;
    }
    .line{
        width:65px;
        margin:0 auto;
        padding-bottom: 2px;
        border-bottom: 1px solid #dde0e3;
    }
    .per-num{
        font-size:19px;
    }
    .content{
        cursor: pointer;
    }
    .lock{
        color: darkslateblue;
        border-radius: 10px;
        border:1px solid #ccc;
        -moz-box-shadow:0px 3px 5px #e7eaf0 inset;
        -webkit-box-shadow:0px 3px 5px #e7eaf0 inset;
        box-shadow:0px 3px 5px #e7eaf0 inset;
    }
    .rank-chart{
        box-sizing: border-box;
        float: left;
        padding-left:50px;
        width: 35%;
    }
    .rank-text{
        box-sizing: border-box;
        float: right;
        width: 60%;
        height: 700px;
        margin:20px;
    }
    .sub-title{
        height: 40px;
        line-height: 40px;
        padding-left:10px;
    }
    .sub-subody{
        width: 100%;
        height: 680px;
        overflow-y: auto;
    }
    .sub-body-title{
        width: 100%;
        height: 40px;
    }
    .shadow-background{
        position: fixed;
        left:0;
        top:0;
        z-index: 200;
        width:100%;
        height:100%;
        background-color:rgba(32,35,53,0.6);
    }
    .pop-window{
        width:80%;
        box-sizing: border-box;
       /* min-width:700px;*/
        position: absolute;
        left:10%;
        top:30px;
        border:1px solid #6e7071;
        background-color: #ffffff;
        padding: 0 2%;
    }
    .sub-body-title{
        background-color: #5e7a88;
        color: #fff;
    }
    .sub-body-title span{
        display: inline-block;
        box-sizing: border-box;
        height: 100%;
        line-height: 40px;
        padding: 0 5px;
        overflow-wrap: nowrap;
        overflow: hidden;
    }
    .num{
        width: 8%;
    }
    .discribe{
        width: 35%;
    }
    .text{
        width: 30%;
    }
    .protime{
        width: 18%;
    }
    .discribe1{
        width: 55%;
    }
    .text1{
        width: 12%;
    }
    .sub-body-text{
        max-height: 618px;
        overflow-y: auto;
    }
    .sub-body-item{
        min-height:40px;
        border-bottom: 1px solid #ccc;
    }
    .sub-body-item span{
        display: inline-block;
        box-sizing: border-box;
        height: 100%;
        line-height: 40px;
        padding: 0 5px;
        color: #657180;
    }
    .sub-body-item div{
        display: inline-block;
        line-height: 30px;
        color: #657180;
    }
    .checkitem{
        cursor: pointer;
        float: left;
    }
    .dates{
        width: 220px;
        padding: 0 10px;
    }
    .items-div{
        float: left;
        padding-left: 15px;
        box-sizing: border-box;
    }
</style>
<template>
    <div class="head">
        <Hnav target="report"></Hnav>
    </div>
    <div class="base-info">
        <div class="infos">
            <div class="top">
                <span class="icon-head1"></span>
                目标
            </div>
            <div class="goal clearfix">
                <textarea readonly class="text-area" v-model="goal.ExpectedGoal" :value="goal.ExpectedGoal" ></textarea>
            </div>
        </div>
    </div>
    <div class="base-info">
        <div class="infos">
            <div class="top">
                <span class="icon-head2"></span>
                评审人员日志
                <span class="dates">{{dateRange}}</span>
                <span class="icon-edit" @click="showCalendar"></span>
                <Calendar :show.sync="isCalendar" :value.sync="dateRange" :x.sync="x" :y.sync="y" :begin.sync="begin" :end="end" v-ref:date></Calendar>
            </div>
            <div class="log">
                <div class="log-th">
                    <span class="rw-person">审查人</span>
                    <span class="rw-identity rw-span">身份</span>
                    <span class="rw-recent rw-span">审查时间</span>
                    <span class="rw-node rw-span">审查节点</span>
                </div>
                <div class="log-wd scroll">
                    <div class="log-td" v-for="(index,item) in log">
                        <span class="rw-person">{{item.ReviewerName}}</span>
                        <span class="rw-identity">{{item.Identity}}</span>
                        <span class="rw-recent">{{item.RTime}}</span>
                        <div v-show="item.Userid==id" class="rw-node-div">
                             <span v-show="rnode[index].soi1.length">SOI#1:</span>
                             <span @click="goTracking('SOI1',rtem1,index,$index)" class="link-id" v-for="rtem1 in rnode[index].soi1" track-by="$index">#{{rtem1.id}}</span>
                             <span v-show="rnode[index].soi2.length">SOI#2:</span>
                             <span @click="goTracking('SOI2',rtem2,index,$index)" class="link-id" v-for="rtem2 in rnode[index].soi2" track-by="$index">#{{rtem2.id}}</span>
                             <span v-show="rnode[index].soi3.length">SOI#3:</span>
                             <span @click="goTracking('SOI3',rtem3,index,$index)" class="link-id" v-for="rtem3 in rnode[index].soi3" track-by="$index">#{{rtem3.id}}</span>
                             <span v-show="rnode[index].soi4.length">SOI#4:</span>
                             <span @click="goTracking('SOI4',rtem4,index,$index)" class="link-id" v-for="rtem4 in rnode[index].soi4" track-by="$index">#{{rtem4.id}}</span>
                        </div>
                        <div v-else class="rw-node-div">
                             <span v-show="rnode[index].soi1.length">SOI#1:</span>
                             <span class="static-id" v-for="rtem1 in rnode[index].soi1" track-by="$index">#{{rtem1.id}}</span>
                             <span v-show="rnode[index].soi2.length">SOI#2:</span>
                             <span class="static-id" v-for="rtem2 in rnode[index].soi2" track-by="$index">#{{rtem2.id}}</span>
                             <span v-show="rnode[index].soi3.length">SOI#3:</span>
                             <span class="static-id" v-for="rtem3 in rnode[index].soi3" track-by="$index">#{{rtem3.id}}</span>
                             <span v-show="rnode[index].soi4.length">SOI#4:</span>
                             <span class="static-id" v-for="rtem4 in rnode[index].soi4" track-by="$index">#{{rtem4.id}}</span>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    <div class="base-info">
        <div class="infos clearfix">
            <div class="top">
                <span class="icon-head3"></span>
                问题级别
            </div>
            <div class="rank-chart">
                <Rankpanel step="SOI1" v-ref:rank1></Rankpanel>
                <Rankpanel step="SOI2" v-ref:rank2>SOI#2</Rankpanel>
                <Rankpanel step="SOI3" v-ref:rank3>SOI#3</Rankpanel>
                <Rankpanel step="SOI4" v-ref:rank4>SOI#4</Rankpanel>
            </div>
            <div class="rank-text">
                <div class="sub-title">
                   {{rank.step}}---{{rank.state}}
                   <span style="color:#5e7a88;font-size: 24px;font-weight:900">{{rank.data.length}}</span>
                </div>
                <div class="sub-body">
                    <div class="sub-body-title">
                        <span class="num after-decorate">序号</span>
                        <span v-show="rank.state=='通过'" class="discribe1 after-decorate">问题描述</span>
                        <span v-else class="discribe after-decorate">问题描述</span>
                        <span v-show="rank.state=='通过'" class="text1 after-decorate">{{rank.state}}</span>
                        <span v-else class="text after-decorate">{{rank.state}}</span>
                        <span class="protime">处理日期</span>
                    </div>
                    <div class="sub-body-text scroll">
                        <div class="sub-body-item clearfix" v-for="item in rank.data" track-by="$index"> 
                            <div class="num items-div">{{$index+1}}</div>
                            <div  v-show="rank.state=='通过'" @click="goReview(item.ID,$index)" class="discribe1 checkitem">{{item.CheckItem}}</div>
                            <div v-else @click="goReview(item.ID,$index)" class="discribe checkitem">{{item.CheckItem}}</div>
                            <div v-show="rank.state=='通过'" class="text1 items-div">无</div>
                            <div v-show="rank.state=='有待改进'" class="text items-div">{{item.Improve}}</div>
                            <div v-show="rank.state=='潜在问题'" class="text items-div">{{item.Matter}}</div>
                            <div v-else class="protime items-div">{{item.ReviewDate}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="base-info">
        <div class="infos">
            <div class="top">
                <span class="icon-head3"></span>
                评审结果
            </div>
            <div class="report-chart">
                <div class="chart clearfix">
                    <div class="tchart">
                        <Pie v-ref:piec></Pie>
                    </div>
                    <div class="tchart-btn">
                        <span @click="change(0)" class="cbtn-0" :class="color=='#43a3fa'?'lock':''">待评审&nbsp{{value[0]}}</span>
                        <span @click="change(2)" class="cbtn-2" :class="color=='#a4f089'?'lock':''">通过&nbsp{{value[2]}}</span>
                        <span @click="change(3)" class="cbtn-3" :class="color=='#fe7847'?'lock':''">未通过&nbsp{{value[3]}}</span>
                        <span @click="change(1)" class="cbtn-1" :class="color=='#f8d249'?'lock':''">忽略&nbsp{{value[1]}}</span>
                    </div>
                    <div class="schart clearfix">
                        <div class="cir">
                             <Cir :percent="sub[0]" :stroke-color="color">
                                <div @click="popList('SOI1')" class="content">
                                    <p class="line">SOI#1</p>
                                    <p class="per-num">{{sub[0]}}%</p>
                                </div>
                                
                             </Cir> 
                         </div>
                         <div class="cir">
                             <Cir :percent="sub[1]" :stroke-color="color">
                                <div @click="popList('SOI2')" class="content">
                                    <p class="line">SOI#2</p>
                                    <p class="per-num">{{sub[1]}}%</p>
                                </div>
                             </Cir> 
                         </div>
                         <div class="cir">
                             <Cir :percent="sub[2]" :stroke-color="color">
                                <div @click="popList('SOI3')" class="content">
                                    <p class="line">SOI#3</p>
                                    <p class="per-num">{{sub[2]}}%</p>
                                </div>
                             </Cir> 
                         </div>
                         <div class="cir">
                             <Cir :percent="sub[3]" :stroke-color="color">
                                <div @click="popList('SOI4')" class="content">
                                    <p class="line">SOI#4</p>
                                    <p class="per-num">{{sub[3]}}%</p>
                                </div>
                             </Cir> 
                         </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    <div v-show="pop" class="shadow-background">
        <div class="pop-window">
            <Vlist v-ref:views :titles="state" :step="step"></Vlist>
        </div>
    </div>
</template>
<script>
    import hnav from '../components/hnav.vue';
    import pie from '../components/pie.vue';
    import cir from '../components/circle.vue';
    import viewlist from '../components/viewlist.vue';
    import rankpanel from '../components/rankpanel.vue';
    import calendar from '../components/calendar.vue';
    import $ from 'jquery';
    import Vue from 'vue';
    module.exports = {
        data: function() {
            return {
                log:{},
                cstate:{},
                goal:{},
                sub:[],
                color:'#43a3fa',
                value:[],
                state:0,
                step:null,
                // 存储各状态下对应的各阶段的数据
                kindSet:[],
                pop:false,
                // 存储问题等级相关数据
                rank:{
                    step:null,
                    state:null,
                    data:[]
                },
                // 存储审查节点
                rnode:[],
                // 存储所有问题的item
                itemSet:[],
                // 存储时间
                isCalendar:false,
                begin:"",
                end:"",
                range:true,
                dateRange:"",
                x:0,
                y:0,
                id:0
            }
        },
        components:{
            Hnav:hnav,
            Pie:pie,
            Cir:cir,
            Vlist:viewlist,
            Rankpanel:rankpanel,
            Calendar:calendar
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
                vm.id=parseInt(v2);
                vm.rank.step="SOI1";
                vm.rank.state="通过";
                vm.getTimeScope(1);
                vm.getCState();
                vm.getItemset();
                vm.getLog(vm.dateRange);
                vm.getGoal();
                vm.getRset('SOI1');
                vm.getRset('SOI2');
                vm.getRset('SOI3');
                vm.getRset('SOI4');
                vm.getRlist();
            }
        },
        beforeDestroy: function() {

        },
        methods: {
            // 获取时间填充日历组件
            getTimeScope:function(code){
                var now = new Date()
                var timestamp = new Date().getTime() - code * 24 * 3600 * 1000;
                var t = new Date(timestamp);
                var data = [{
                    y : t.getFullYear(),
                    m : t.getMonth() + 1,
                    d : t.getDate()
                },{
                    y : now.getFullYear(),
                    m : now.getMonth() + 1,
                    d : now.getDate()
                }];
                if(data[0].m<10){
                    data[0].m='0'+data[0].m;
                }
                if(data[0].d<10){
                    data[0].d='0'+data[0].d;
                }
                if(data[1].m<10){
                    data[1].m='0'+data[1].m;
                }
                if(data[1].d<10){
                    data[1].d='0'+data[1].d;
                }
                this.dateRange=data[0].y+'-'+data[0].m+'-'+data[0].d+' ~ '+data[1].y+'-'+data[1].m+'-'+data[1].d;
            },
            // 显示日历组件
            showCalendar:function(e){
                let vm=this;
                if(vm.isCalendar){
                    vm.isCalendar=false;
                }
                else{
                    e.stopPropagation();
                    vm.isCalendar=true;
                    vm.x=e.target.offsetLeft-220;
                    vm.y=e.target.offsetTop+e.target.offsetHeight+8;
                    vm.$refs.date.$emit('render_data');
                }
                /*var bindHide=function(e){
                    e.stopPropagation();
                    vm.isCalendar=false;
                    document.removeEventListener('click',bindHide,false);
                };
                setTimeout(function(){
                    document.addEventListener('click',bindHide,false);
                },500);*/
            },
            // 获取所有问题的id
            getItemset:function(){
                let vm=this;
                let resource = vm.$resource('rItem/itemid');
                resource.get()
                        .then((response) => {
                             if(response.data.Code==200){
                                vm.itemSet=response.data.Data;
                             }
                             else{
                                vm.$router.go({path:'./index'});
                             }

                        })
                        .catch(function(response) {
                            console.log(response)
                         })
            },
            // 对操作节点处理
            proLog:function(str){
                let s1=[];
                let s2=[];
                let s3=[];
                let s4=[];
                let tmp=[];
                let node={};
                if(str!=null){
                    let matr=str.split(', ');
                    for(let unit of matr){
                       let tmp=unit.split('=');
                       if(tmp[0]=="SOI1"){
                           s1.push({id:tmp[1],item:tmp[2]});
                       }
                       else if(tmp[0]=='SOI2'){
                          s2.push({id:tmp[1],item:tmp[2]});
                       }
                       else if(tmp[0]=='SOI3'){
                          s3.push({id:tmp[1],item:tmp[2]});
                       }
                       else if(tmp[0]=='SOI4'){
                          s4.push({id:tmp[1],item:tmp[2]});
                       }
                    }
                }
                node['soi1']=s1;
                node['soi2']=s2;
                node['soi3']=s3;
                node['soi4']=s4;
                this.rnode.push(node);
            },
            // 获取目标信息
            getGoal:function () {
                let vm=this;
                let key=localStorage.getItem('id');
                let resource = vm.$resource('recordGet?id='+key);
                resource.get()
                        .then((response) => {
                             if(response.data.Code==200){
                                localStorage.setItem('goal',JSON.stringify(response.data.reviewRecord));
                                vm.goal=response.data.reviewRecord;
                             }
                             else{
                                vm.$router.go({path:'./index'});
                             }

                        })
                        .catch(function(response) {
                            console.log(response)
                         })
            },
            //获取操作日志
            getLog:function (date) {
                let vm=this;
                let resource = vm.$resource('log/get?range='+date);
                resource.get()
                        .then((response) => {
                            if(response.data.Code==200){
                                vm.log=response.data.Data;
                                for(let unit of response.data.Data){
                                    vm.proLog(unit.RNode);
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
            // 获取各阶段的问题等级数据
            getRset:function(step){
                let vm=this;
                let resource = vm.$resource('rItem/harzard?stage='+step);
                resource.get()
                        .then((response) => {
                             if(response.data.Code==200){
                                if(step=='SOI1'){
                                    vm.$refs.rank1.$emit('set_rank',response.data.result,'#66ccff');
                                }
                                else if(step=='SOI2'){
                                    vm.$refs.rank2.$emit('set_rank',response.data.result,'#6699ff');
                                }
                                else if(step=='SOI3'){
                                    vm.$refs.rank3.$emit('set_rank',response.data.result,'#6666ff');
                                }
                                else{
                                    vm.$refs.rank4.$emit('set_rank',response.data.result,'#6600ff');
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
            // 获取某级别下问题清单
            getRlist:function(){
                let vm=this;
                let address='rItem/hItem?stage='+vm.rank.step;
                if(vm.rank.state=='通过'){
                    address+='&passed=1&imp=0&matter=0';
                }
                else if(vm.rank.state=='有待改进'){
                    address+='&passed=0&imp=1&matter=0';
                }
                else if(vm.rank.state=='潜在问题'){
                    address+='&passed=0&imp=0&matter=1';
                }
                let resource = vm.$resource(address);
                resource.get()
                        .then((response) => {
                             if(response.data.Code==200){
                                vm.rank.data=response.data.ItemList;
                             }
                             else{
                                vm.$router.go({path:'./index'})
                             }
                        })
                        .catch(function(response) {
                            console.log(response)
                         })
            },
              // 将所有id存入数组
            proId:function(obj){
                let len=obj.length;
                let arr=[];
                for(let i=0;i<len;i++){
                    arr.push(obj[i].ID);
                }
                return arr;
            },
             // 判断操作日志中所选阶段的id是否已被删除
            existItem:function(obj,set){
                for(let unit of set){
                    if(unit==obj.item){
                        return true;
                    }
                }
                return false;
            },
            // 将操作日志中所选阶段的id存入数组
            proTid:function(obj){
                let vm=this;
                let len=obj.length;
                let arr=[];
                for(let i=0;i<len;i++){
                    let isexist=vm.existItem(obj[i],vm.itemSet);
                    if(isexist){
                        arr.push(obj[i].id);
                    }
                }
                return arr;
            },
            // 追踪评审日志到相关评审页
            goTracking:function(stage,sets,inx,index){
                let vm=this;
                let isexist=vm.existItem(sets,vm.itemSet);
                if(isexist){
                    let unit=[];
                    if(stage=='SOI1'){
                        unit=vm.rnode[inx].soi1;
                    }
                    else if(stage=='SOI2'){
                        unit=vm.rnode[inx].soi2;
                    }
                    else if(stage=='SOI3'){
                        unit=vm.rnode[inx].soi3;
                    }
                    else if(stage=='SOI4'){
                        unit=vm.rnode[inx].soi4;
                    }
                    let tmp=vm.proTid(unit);
                    localStorage.setItem('stage',stage);
                    localStorage.setItem('listPos',index);
                    localStorage.setItem('idSet',JSON.stringify(tmp));
                    localStorage.setItem('listId',sets.id);
                    vm.$router.go({path:'./rplist'});
                }
                else{
                    confirm("该问题属于自定义问题，已被删除");
                }
            },
            // 进入问题详细评审页
            goReview:function(id,index){
                let vm=this;
                let tmp=vm.proId(vm.rank.data);
                localStorage.setItem('stage',vm.rank.step);
                localStorage.setItem('listPos',index);
                localStorage.setItem('idSet',JSON.stringify(tmp));
                localStorage.setItem('listId',id);
                vm.$router.go({path:'./rplist'});
            },
            // 获取checklist状态
            getCState:function(){
                let vm = this;
                let resource=vm.$resource('res/get');
                resource.get()
                    .then((response) => {
                        if(response.data.Code==200){
                           let set = response.data.StatusCount;
                           vm.cstate=[];
                           vm.cstate.$set(0,{value:set.InitialState,name:"待评审"});
                           vm.value.$set(0,set.InitialState);
                           vm.cstate.$set(1,{value:set.Ignored,name:"忽略"});
                           vm.value.$set(1,set.Ignored);
                           vm.cstate.$set(2,{value:set.Passed,name:"通过"});
                           vm.value.$set(2,set.Passed);
                           vm.cstate.$set(3,{value:set.Failed,name:"未通过"});
                           vm.value.$set(3,set.Failed);
                           vm.$refs.piec.$emit('set_data',vm.cstate);
                           vm.getKindData();
                        }
                        else{
                           vm.$router.go({path:'./index'});
                        }
                    })
                    .catch(function(response) {
                        console.log(response)
                     })
            },
            // 获取某种状态下的数据
            getKindData:function(){
                let vm = this;
                let resource=vm.$resource('res/soista');
                resource.get()
                    .then((response) => {
                       if(response.data.Code=200){
                          vm.kindSet = response.data.SOIStatus;
                          vm.getSdata(0);
                       }
                       else{
                          vm.$router.go({path:'./index'});
                       }
                    })
                    .catch(function(response) {
                        console.log(response)
                     })
            },
            // 获取某种状态下的数据
            getSdata:function(type){
                let vm = this;
                vm.sub=[];
                let count=vm.cstate[type].value;
                if(type==0){
                    let tmp=vm.kindSet.InitialState;
                    for(let i=0;i<tmp.length;i++){
                        let num = tmp[i];
                        if(num==0){
                            vm.sub.push(0);
                        }
                        else{
                            let per=Math.round(num/count*10000)/100.00;
                            vm.sub.push(per);
                        }
                    }
                }
                else if(type==1){
                    let tmp=vm.kindSet.Ignored;
                    for(let i=0;i<tmp.length;i++){
                        let num = tmp[i];
                       if(num==0){
                            vm.sub.push(0);
                        }
                        else{
                            let per=Math.round(num/count*10000)/100.00;
                            vm.sub.push(per);
                        }
                    }
                }
                else if(type==2){
                    let tmp=vm.kindSet.Passed;
                    for(let i=0;i<tmp.length;i++){
                        let num = tmp[i];
                        if(num==0){
                            vm.sub.push(0);
                        }
                        else{
                            let per=Math.round(num/count*10000)/100.00;
                            vm.sub.push(per);
                        }
                    }
                }
                else if(type==3){
                    let tmp=vm.kindSet.Failed;
                    for(let i=0;i<tmp.length;i++){
                        let num = tmp[i];
                        if(num==0){
                            vm.sub.push(0);
                        }
                        else{
                            let per=Math.round(num/count*10000)/100.00;
                            vm.sub.push(per);
                        }
                    }
                }
            },
            // 点击不同状态的按钮显示不同数据
            change:function(obj){
                let vm=this;
                vm.state=obj;
                vm.getSdata(obj);
                if(obj==0){
                    vm.color='#43a3fa';
                }
                if(obj==1){
                     vm.color='#f8d249';
                }
                if(obj==2){
                    vm.color='#a4f089';
                }
                if(obj==3){
                    vm.color='#fe7847';
                }
            },
            // 弹出问题清单
            popList:function(kind){
                let vm=this;
                let k;
                vm.step=kind;
                if(vm.state==0){
                    k=2;
                }
                else if(vm.state==1){
                    k=0;
                }
                else if(vm.state==2){
                    k=1;
                }
                else if(vm.state==3){
                    k=-1;
                }
                let resource=vm.$resource('rItem/ifpass?passed='+k+'&stage='+kind);
                resource.get()
                    .then((response) => {
                       if(response.data.Code==200){
                          vm.pop=true;
                          vm.$refs.views.$emit('set_data',response.data.RItemList)
                       }
                       else{
                          vm.$router.go({path:'./index'})
                       }
                    })
                    .catch(function(response) {
                        console.log(response)
                     })
            },
            goRouter:function(id){

            }
        },
        events:{
            closePop:function(){
                this.pop=false;
            },
            // 获取与问题等级相关的点击事件
            getRobj:function(step,state){
                let vm=this;
                vm.rank.step=step;
                vm.rank.state=state;
                vm.getRlist();
            },
            // 根据日历组件筛选操作日志
            filterLog:function(value){
                this.getLog(value);
            }
        }
    }
</script>
