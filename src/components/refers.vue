<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 查看他人评审意见
-->
<style scoped>
   .refers-view{
     position: absolute;
     width: 400px;
     z-index: 80;
     background-color: #fff;
     border: 1px solid #5e7a88;
   }
   .v-top{
     width: 100%;
     height: 40px;
     color: #fff;
     background-color: #5e7a88;
   }
   .v-item{
     max-height: 400px;
     overflow-y: auto;
   }
   .review{
     display: inline-block;
     box-sizing: border-box;
     position: relative;
     line-height: 40px;
     padding: 0 5px;
     width: 35%;
   }
   .operate{
     display: inline-block;
     box-sizing: border-box;
     line-height: 40px;
     padding: 0 5px;
     width: 20%;
   }
   .links{
     color:#5e7a88;
     cursor: pointer;
     text-decoration: outline;
   }
   .rows{
      border-bottom: 1px dashed #5e7a88;
   }
</style>
<template>
    <div class="refers-view"  :style="{'left':x+'px','top':y+'px'}">
        <div class="v-top">
            <span class="review after-decorate">评审人</span>
            <span class="review after-decorate">评审意见</span>
            <span class="operate">操作</span>
        </div>
        <div class="v-item scroll">
           <div class="rows" v-for="item in data">
                <span class="review">{{item.name}}</span>
                <span v-show="item.result==-1" class="review">未通过</span>
                <span v-show="item.result==0" class="review">忽略</span>
                <span v-show="item.result==1" class="review">通过</span>
                <span class="operate links" @click="gorpage(item)">查看</span>
           </div>
        </div>
    </div>
</template>
<script>
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
                adr:$CONFIG.appyw
            }
        },
        ready: function() {
           
        },
        beforeDestroy: function() {

        },
        methods: {
            // 进入referpage页
            gorpage:function(item){
                localStorage.setItem('otherId',item.userID);
                localStorage.setItem('otherUser',item.name);
                this.$router.go({path:'./referpage'})
            }
        },
        events:{
            render_data:function(id){
                let vm=this;
                let resource = vm.$resource(vm.adr+'review/getUsersResult?ID='+id);
                resource.get()
                    .then((response) => {
                       if(response.data.Code==200){
                            vm.$set('data',response.data.UsersResult);
                        }
                        else{
                            vm.$router.go({path:'./index'});
                        }
                    })
                    .catch(function(response) {
                        console.log(response)
                    })
            }
        }
    }
</script>
