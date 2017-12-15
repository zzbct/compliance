<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 级别占比bar
-->
<style scoped>
    .rank-view{
        width:100%;
        margin: 20px 0;
    }
    .title{
        box-sizing: border-box;
        width: 100%;
        height:50px;
        padding-left: 21px;
        line-height:50px;
        font-size:16px;
        font-weight: bold;
        color:#464c5b;
        border-bottom: 1px solid #dadee3;
    }
    .outline{
        box-sizing: border-box;
        width:100%;
        height:45px;
        padding-top: 15px;
        font-size: 14px;
        color: #fff;
        font-weight: 900;
    }
    .outline-left{
        box-sizing: border-box;
        float: left;
        width:41%;
        height:100%;
        padding-left: 30px;
        border-right: 1px solid #dfe7f2;
    }
    .outline-right{
        box-sizing: border-box;
        float: left;
        width:59%;
        height:100%;
        padding-left: 14px;
    }
    .rank-area{
        width:100%;
    }
    .rank-item{
        box-sizing: border-box;
        width: 100%;
        height:40px;
        padding-right: 10px;
        line-height: 40px;
        font-size: 14px;
        color:#657180;
        border-top:1px solid #dfe7f2;
    }
    .rank-odd{
        background-color: #ffffff;
    }
    .rank-even{
        background-color: #fbfcfe;
    }
    .data-left{
        box-sizing: border-box;
        float: left;
        width:41%;
        padding-left: 30px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .data-right{
        box-sizing: border-box;
        float: right;
        width:59%;
        line-height: 40px;
        padding-left: 14px;

    }
    .data-right-bar{
        float: left;
        width: 74%;
    }
    .data-right-bar>span{
        display: inline-block;
        height:11px;
    }
    .data-right-text{
        display: inline-block;
        box-sizing: border-box;
        float: right;
        width: 25%;
    }
    .icon:active{
        color:#43a3fa;
    }
    .icon{
        float: right;
        line-height: 40px;
    }
</style>
<template>
    <div class="rank-view">
        <div class="outline clearfix" :style="{backgroundColor:bc}">
            <div class="outline-left">
                <slot>SOI#1</slot>
            </div>
            <div class="outline-right">占比</div>
        </div>
        <div class="rank-area" v-el:area>
            <div class="rank-item clearfix" :class="$index%2?'rank-even':'rank-odd'" v-for="item in data" track-by="$index">
                <div class="data-left">
                    {{item.name}}
                </div>
                <div class="data-right clearfix">
                    <div class="data-right-bar">
                        <span :style="{width:rate[$index],backgroundColor:color[$index]}"></span>
                    </div>
                    <div  class="data-right-text">
                        <span>{{rate[$index]}}</span>
                        <span @click="send_robj(item.name)" class="icon icon-left-edit"></span>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports={
        data(){
            return{
                data:[],
                rate:[],
                color:[
                   '#1ed75f',
                   '#43a3fa',
                   '#ff3333'
                ],
                bc:''
            }
        },
        props:{
            step:{
                type:String,
                default:'SOI#1'
            }
        },
        components:{

        },
        computed:{

        },
        ready: function() {

        },
        beforeDestroy: function() {

        },
        methods: {
            send_robj:function(name){
                this.$dispatch("getRobj",this.step,name)
            }
        },
        events:{
            set_rank:function (data,color) {
                let vm=this;
                vm.data = data;
                vm.bc=color;
                let sum=0;
                let len=data.length;
                for(let i=0;i<len;i++){
                    sum+=data[i].value;
                }
                for(let i=0;i<len;i++){
                    let percent = Math.round(data[i].value / sum * 100)+'%';
                    let rate= (percent == 'NaN%') ? '0%' : percent;
                    vm.rate.$set(i,rate);
                }
            }
        }
    }
</script>
