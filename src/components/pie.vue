<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 占比环形图
-->
<style scoped>
    .circle-view{
        position: relative;
        width:100%;
        height:300px;
        padding-right:30px;
    }
    .title{
        box-sizing: border-box;
        width: 100%;
        height:60px;
        padding-left: 21px;
        line-height:60px;
        font-size:16px;
        font-weight: bold;
        color:#464c5b;
        border-bottom: 1px solid #dadee3;
    }
    .chart-area{
        box-sizing: border-box;
        width:100%;
        height:300px;
        padding:20px 0 20px 30px;
    }
</style>
<template>
    <div class="circle-view">
        <div class="chart-area" v-el:area></div>
    </div>
</template>
<script>
    import echarts from 'echarts';
    module.exports={
        data(){
            return{
                data:[]
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
            initChart:function () {
                let vm =this;
                vm.myChart = echarts.init(vm.$els.area);
                var option = {
                    color:['#43a3fa','#f8d249','#a4f089','#fe7847'],
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                   /* legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: '55',
                        itemWidth:11,
                        itemHeight:11,
                        itemGap:36,
                        textStyle:{
                            fontSize:'12',
                            color:'#5f6a78'
                        },
                        data: ['待评审','待协商','通过','未通过']
                    },*/
                    series : [
                        {
                            name: 'review result',
                            type: 'pie',
                            radius : '70%',
                            center: ['40%', '50%'],
                            data:this.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    borderWidth:2,
                                    borderColor:'#fff',
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                this.myChart.setOption(option);
            }
        },
        events:{
            set_data:function (data) {
                this.data = data;
                this.initChart()
            }
        }
    }
</script>
