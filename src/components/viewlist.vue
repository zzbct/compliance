<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 报告界面中问题清单弹窗
-->
<style scoped>
    .body-view{
        width: 100%;
        height: 100%;
        margin-bottom: 30px;
    }
    .title{
        position: fixed;
        top:60px;
        height: 40px;
        width: 76%;
        line-height: 40px;
        color: red;
        font-size: 20px;
        font-weight: 700;
        background-color: #fff;
    }
    .title span{
        float: right;
        cursor: pointer;
    }
    .list-window{
        width: 100%;
    }
    .list-tool{
        width: 76%;
        height: 60px;
        line-height: 60px;
        position: fixed;
        top: 100px;
        background-color: #fff;
    }
    .list-title{
       position: fixed;
       top: 100px;
       box-sizing: border-box;
       width: 76%;
       height: 60px;
       line-height: 60px;
       background: -webkit-linear-gradient(left, #cfd6e2,#ddd);
       background: -moz-linear-gradient(left, #cfd6e2,#ddd);
       background: -o-linear-gradient(left, #cfd6e2,#ddd);
       background: -ms-linear-gradient(left, #cfd6e2,#ddd);
       background: linear-gradient(left, #cfd6e2,#ddd);
       Filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=1,startColorStr=#cfd6e2,endColorStr=#ddd);
        filter:  progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorStr='#cfd6e2',endColorStr='#ddd'); /*IE6 & IE7*/  
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorStr='#cfd6e2',endColorStr='#ddd')"; /* IE8 */  
       font-size: 0;
    }
    .list-title>span{
        display: inline-block;
        box-sizing: border-box;
        height: 100%;
        font-size: 16px;
        line-height: 60px;
        padding: 0 10px;
        overflow-wrap: nowrap;
        overflow: hidden;
    }
    .num{
        width:8%;
    }
    .discribe{
        width:55%;
    }
    .operate{
        width:16%;
        cursor: pointer;
    }
    .status{
        width:15%;
    }
    .list-context{
        box-sizing: border-box;
        width: 100%;
        max-height: 600px;
        overflow-y: auto;
        margin-top: 130px;
    }
    .list-item-active div{
        display: inline-block;
        line-height: 30px;
        margin-left: -8px;
    }
</style>
<template>
    <div class="body-view">
        <div class="title">
            {{step}}---{{types}}:{{total}}
            <span @click="close" class="icon-cross"></span>
        </div>
        <div class="list-window">
            <div class="list-title">
                <span class="num after-decorate">序号</span>
                <span class="discribe after-decorate">问题描述</span>
                <span class="status after-decorate">评审状态</span>
                <span class="operate">操作</span>
            </div>
            <div class="list-context scroll">
                <div v-for="item in data" class="list-item-active" track-by="$index"> 
                    <span class="num">{{$index}}</span>
                    <div class="discribe">{{item.CheckItem}}</div>
                    <span v-show="item.Passed==2" class="status icon-legend1">&nbsp未评审</span>
                    <span v-show="item.Passed==1" class="status icon-legend3">&nbsp通过</span>
                    <span v-show="item.Passed==0" class="status icon-legend2">&nbsp忽略</span>
                    <span v-show="item.Passed==-1" class="status icon-legend4">&nbsp未通过</span>
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
    module.exports = {
        data: function() {
            return {
                data:[],
                total:-1
            }
        },
        props:{
            titles:{
                type:Number,
                default:null
            },
            step:{
                type:String,
                default:null
            }
        },
        components:{
            Hnav:hnav
        },
        computed:{
            types:function(){
                let vm=this;
                if(vm.titles==0){
                    return '待评审';
                }
                else if(vm.titles==1){
                    return '忽略';
                }
                else if(vm.titles==2){
                    return '通过';
                }
                else if(vm.titles==3){
                    return '未通过';
                }
            }
        },
        ready: function() {
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
                localStorage.setItem('stage',vm.step);
                localStorage.setItem('listPos',index);
                localStorage.setItem('idSet',JSON.stringify(tmp));
                localStorage.setItem('listId',id);
                vm.$router.go({path:'./rplist'});
            },
            close:function(){
                this.$dispatch('closePop');
            }
        },
        events:{
            set_data:function(data){
                this.data=data;
                this.total=data.length;
            }
        }
    }
</script>