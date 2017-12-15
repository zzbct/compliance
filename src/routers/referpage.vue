<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 查看他人评审结果的页面
-->
<style scoped>
  .rp-view{
  	width: 80%;
  	margin: 2% auto;
  }
  .back{
    float: right;
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
  .rp-title{
    margin-top: 20px;
  	height: 40px;
  	line-height: 40px;
  	text-align: center;
  	background: -webkit-linear-gradient(left, #cfd6e2,#ddd);
    background: -moz-linear-gradient(left, #cfd6e2,#ddd);
    background: -o-linear-gradient(left, #cfd6e2,#ddd);
    background: -ms-linear-gradient(left, #cfd6e2,#ddd);
    background: linear-gradient(left, #cfd6e2,#ddd);
    Filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=1,startColorStr=#cfd6e2,endColorStr=#ddd);
    filter:  progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorStr='#cfd6e2',endColorStr='#ddd'); /*IE6 & IE7*/  
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorStr='#cfd6e2',endColorStr='#ddd')"; /* IE8 */  
  }
  .rp-tr{
  	width: 100%;
  	box-sizing: border-box;
  	padding: 5px 0;
  	border-bottom: 1px solid #ddd;
  }
  .td-l{
  	box-sizing: border-box;
  	display: inline-block;
  	width: 150px;
  	padding: 0 10px;
  }
  .td-div{
      float: left;
      box-sizing: border-box;
      display: inline-block;
      width: 157px;
      padding:0 10px;
      line-height: 35px;
  }

  .td-r{
  	box-sizing: border-box;
  	display: inline-block;
  	width:75%;
  	padding: 0 10px;
    font-size: 16px;
    border-left: 1px solid #5e7a88;
  }
  .td-r>p{
      height: 30px;
      line-height: 30px;
  }
  .evi-item{
      width: 60%;
  }
  .evi-rel{
      position: relative;
      width: 30%;
  }
  .evi-doc{
      box-sizing: border-box;
  	/*padding:10px;*/
      width: 340px;
      height: 30px;
      margin: 0 auto;

  }
  .evi-doc-span{
      display: inline-block;
      height: 30px;
      line-height: 30px;
  }
</style>
<template>
    <div class="head">
        <Hnav :target="stage"></Hnav>
    </div>
    <div class="rp-view">
        <div>
          <div class="clearfix">
            <span @click="backto" class="back">返回评审页</span>
          </div>
      	  <div class="rp-title">评审结果记录---{{reviewDate}}</div>
      	  <div class="rp-tr">
      	  	<span class="td-l">问题描述</span>
      	  	<span class="td-r">{{data.checkItem}}</span>
      	  </div>
      	   <div class="rp-tr">
      	  	<span class="td-l">评审人</span>
      	  	<span class="td-r">{{name}}</span>
      	  </div>
      	  <div class="rp-tr">
      	  	<span class="td-l">评审结果</span>
            <span v-show="data.passed==-1" class="td-r">未通过</span>
            <span v-show="data.passed==0" class="td-r">忽略</span>
      	  	<span v-show="data.passed==1" class="td-r">通过</span>
      	  </div>
            <div class="rp-tr clearfix">
                <div class="td-div">未评审证据项</div>
                <div class="td-r">
                  <p v-for="es in evino">{{es}}</p>
                </div>
            </div>
            <div class="rp-tr clearfix">
                <div class="td-div">已评审证据项</div>
                <div class="td-r">
                  <table style="width:100%">
                      <tr v-for="item in data.eviForm" style="border-bottom: 1px solid #ddd">
                          <td class="evi-item">{{item.eviItem}}</td>
                          <td class="evi-rel">
                              <div class="evi-doc" v-for="rel in item.evilist">
                                  <span class="evi-doc-span">{{rel.type}}类型-{{rel.name}}-{{rel.chapter}}节({{rel.startPage}}-{{rel.endPage}}页{{rel.details}})</span>
                              </div>
                          </td>
                      </tr>
                  </table>
                </div>
            </div>
      	  <div class="rp-tr">
      	  	<span class="td-l">改进意见</span>
      	  	<pre v-show="data.improveStatus==1" class="td-r">{{data.improve}}</pre>
            <pre v-else class="td-r">无</pre>
      	  </div>
      	  <div class="rp-tr">
      	  	<span class="td-l">潜在问题</span>
      	  	<pre v-show="data.matterStatus==1" class="td-r">{{data.matter}}</pre>
            <pre v-else class="td-r">无</pre>
      	  </div>
      	   <div class="rp-tr">
      	  	<span class="td-l">备注</span>
      	  	<pre v-show="data.comment.length" class="td-r">{{data.comment}}</pre>
            <pre v-else class="td-r">无</pre>
      	  </div>
    	</div>
   <!-- 
        <div>
           <div class="rp-title">未评审证据项</div>
           <div>
               <div class="rp-tr">
                             <span style="padding:0 10px">1&nbsps</span>
                       </div>
           </div>
       </div>
       <div>
           <div class="rp-title">已评审证据项及细节</div>
           <div>
               <table style="width:100%;padding:10px">
                   <tr style="border-bottom: 1px solid #ddd">
                       <td class="evi-item">证据项证据项证据项证据项证据项证据项证据项证据项证据项证据项证据项证据项</td>
                       <td class="evi-rel">
                           <div class="evi-doc" v-for="item in test">
                                       psac类型-需求文档-1.2节(10-20页细节说明)
                           </div>
                       </td>
                   </tr>
               </table>
           </div>
       </div> 
   -->
    </div>
</template>
<script>
    import hnav from '../components/hnav.vue';
    import Vue from 'vue';
    import $ from 'jquery';
    module.exports = {
        props:{
            x: {
                    type: Number,
                    default: 0
                },
            y: {
                type: Number,
                default: 0
            }
        },
        data: function() {
            return {
                data:null,
                stage:'SOI1',
                test:10,
                id:0,
                userid:0,
                name:'',
                adr:$CONFIG.appyw,
                eviok:[],
                evino:[],
                allevi:[],
                reviewDate:""
            }
        },
        components:{
        	Hnav:hnav
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
               vm.id=parseInt(localStorage.getItem('listId'));
               vm.userid=localStorage.getItem('otherId');
               vm.name=localStorage.getItem('otherUser');
               vm.stage=localStorage.getItem('stage');
               vm.getListdata();
           }
        },
        beforeDestroy: function() {

        },
        methods: {
             // 获取问题清单
            getListdata:function(){
                let vm=this;
                let address=vm.adr+'review/getItemForm?RefRItem='+vm.id+'&otherUserID='+vm.userid;
                let resource=vm.$resource(address);
                resource.get().then((response)=>{
                   if(response.data.code==200){
                       vm.reviewDate=response.data.reviewTime;
                       let obj=response.data.ItemForm[0];
                       vm.data=obj;
                       vm.eviok=vm.proEvi(obj.eviForm);
                       vm.getModelitem();
                   }
                   else{
                       vm.$router.go({path:'./index'});
                   }
                })
            },
            // 对拿到的数据预处理
            proEvi:function(origin){
                let tmp=[];
                for(let unit of origin){
                    tmp.push(unit.eviItem);
                }
                return tmp;
            },
            // 获取证据项
            getModelitem:function(){
                let vm=this;
                let resource=vm.$resource(vm.adr+'review/getEviStatistics?RefRItem='+vm.id);
                resource.get().then((response)=>{
                    if(response.data.code==200){
                        let obj=response.data.Evis;
                        vm.allevi=[];
                        for(let unit of obj){
                          vm.allevi.push(unit.eviItem);
                        }
                        vm.evino=$.extend(true,[],vm.allevi);
                        vm.evino=vm.filterData(vm.evino,vm.eviok);
                    }
                    else{
                        vm.$router.go({path:'./index'});
                    }
                })
            },
            filterData:function(obj1,obj2){
                let vm=this;
                let len=obj1.length;
                for(let i=0;i<len;i++){
                  let ds=obj1[i];
                  for(let unit of obj2){
                    if(ds==unit){
                      obj1.$remove(ds);
                      i--;
                      len--;
                    }
                  }
                }
                return obj1;
            },
            //返回评审页
            backto:function(){
              let path=localStorage.getItem('listType');
              this.$router.go({path:'./'+path});
            }
        },
        events:{
            render_data:function(){
                console.log(1)
            }
        }
    }
</script>
