/**
 * Created by lx on 16/09/26.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Env from './config/env';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
// 开启debug模式
Vue.config.debug = true;
Vue.http.options.root = $CONFIG.appmf;

// 路由配置
var router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: Env != 'production'
});

router.map({
    '/index': {
        name: 'index',
        component: function (resolve) {
            require(['./routers/index.vue'], resolve);
        }
    },
    '/home':{
        name: 'home',
        component: function (resolve) {
            require(['./routers/home.vue'], resolve);
        }
    },
    '/baseinfo':{
        name: 'baseinfo',
        component: function (resolve) {
            require(['./routers/baseinfo.vue'], resolve);
        }
    },
    '/drlist':{
        name: 'baseinfo',
        component: function (resolve) {
            require(['./routers/drlist.vue'], resolve);
        }
    },
    '/doc':{
        name: 'doc',
        component: function (resolve) {
            require(['./routers/doc.vue'], resolve);
        }
    },
    '/SOI1':{
        name: 'soi1',
        component: function (resolve) {
            require(['./routers/soi1.vue'], resolve);
        }
    },
    '/SOI2':{
        name: 'soi2',
        component: function (resolve) {
            require(['./routers/soi2.vue'], resolve);
        }
    },
    '/SOI3':{
        name: 'soi3',
        component: function (resolve) {
            require(['./routers/soi3.vue'], resolve);
        }
    },
    '/SOI4':{
        name: 'soi4',
        component: function (resolve) {
            require(['./routers/soi4.vue'], resolve);
        }
    },
    '/list':{
        name: 'list',
        component: function (resolve) {
            require(['./routers/list.vue'], resolve);
        }
    },
    '/report':{
        name: 'report',
        component: function (resolve) {
            require(['./routers/report.vue'], resolve);
        }
    },
     '/rplist':{
        name: 'rplist',
        component: function (resolve) {
            require(['./routers/rplist.vue'], resolve);
        }
    },
     '/referpage':{
        name: 'referpage',
        component: function (resolve) {
            require(['./routers/referpage.vue'], resolve);
        }
    },
});

router.beforeEach(function () {
    window.scrollTo(0, 0);
});

router.afterEach(function (transition) {

});

router.redirect({
    '*': "/index"
});
router.start(App, '#app');