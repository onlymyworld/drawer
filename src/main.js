import Vue from 'vue';
import g7s from '@ued/g7s';
import vueBeauty from 'vue-beauty';
import 'vue-beauty/package/style/vue-beauty.min.css';

// 门户高度监听
import Listenner from '@ued/g7s/libs/listenner';

// 引入公用的css文件
import '@ued/g7s/assets/common.less';
import '@ued/g7s/assets/layout.less';

// 入口文件
import App from './App';

// 开发下，启动左侧的菜单栏
import menu from './dev';

// 路由文件
import router from './router';

// 全局vuex文件
import store from './store';

// api
import index from './api/index';

// 项目配置文件
import { config, truckConfig } from '../config';

const listenner = new Listenner(Vue);

listenner.start();

// g7s包初始化，接入了vega，也可以不这么调用函数；支持多次调用
Vue.use(g7s, [{
    apis: { ...index },
    vega: config.vega,
    product: config.product,
}, {
    apis: { ...index },
    vega: truckConfig.vega,
    name: '$api',
}]);

Vue.use(vueBeauty);

Vue.config.productionTip = false;

/* eslint-disable */
const renderComponents = NEED_MENU === 'dn dev' ? menu : App;

// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = process.env.NODE_ENV === 'development' ? true : false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(renderComponents),
});
