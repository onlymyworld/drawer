# g7s模版使用

## 关于vega（ajax请求）

模版内封装了vega专用接口，它支持一种vega加密或者多种加密，加密的配置，申请后，直接填入了config.js中。注意product只能传入一个

我们在框架内建立了config.js配置文件，只需要把相应的参数填入。

```
Vue.use(g7s, {
    apis: {
        'getTrucks post': '/v1/truck/truck/list',
        'truckList post': '/v1/truck/truck/truck_list_complex',
        'truckListComplex post': '/v1/truck/truck/truck_list_complex',
        user: {
            'info get': '/v1/truck/truck/list',
        },
    },
    vega: {
        test: {
            accessId: '12323',
            secretKey: 'wwHSGGnblrHvXh40kQURkMfg3Q2gjorN',
        },
        demo: {
            accessId: '23321',
            secretKey: 'RbRkDi6gizSxsy4KTu6eOR4szVEXNGfU',
        },
        online: {
            accessId: '12332',
            secretKey: 'K6y0EFtT1b80o9U0RtL2qV6JcQaIpV5F',
        },
        localhost: {
            accessId: 'bfcguvy',
            secretKey: 'wwHSGGnblrHvXh40kQURkMfg3Q2gjorN',
        },
    },
    product: 'truck',
    name: '$vega', // 默认为'$vega'
})

// 调用：
this.$vega.user.info() // 调用apis内的user模块下的info接口；
this.$vega.getTrucks() // 调用apis内的gettrucks接口


// 也可以注册多个vega

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

// 调用方式跟上面一致，注意name的区分。

```

## 关于页面跳转

因为我们开发的是g7s的子系统，我们需要门户帮助我们跳转，所以需要调用门户的方法去跳转

```
// 第一种调用：
import { goto } from '@ued/g7s/libs/util';

goto({ name: home })


// 第二种调用：
<div v-goto="{ name: home }"><div>

```
注意，在跳转过程中，建议使用router的name跳转

## 关于开发模式

子系统的charles代理不够友好，我们更新了开发方式。

1、在内地址栏中放入相应环境和token就可以调取相应环境的接口

```
http://172.22.112.203:8081/?env=demo&token=7238a40059d6f96f6e1f8ece729023ff#/home

这个会去调用demo环境的vega接口
```

2、dev.vue内可以配置左侧菜单，只需要用npm start启动，dn dev启动是没有左侧菜单的


## 关于g7s子系统和门户的交互

门户通过gateway.js来监听子系统传入的参数，子系统内，我们封装了g7s库来与门户交互。
具体查看 https://git.chinawayltd.com/frontend/ued-kit/tree/master/tools/g7s

```
import { g7s } from '@ued/g7s';

// 调用
g7s.login();

```

## 关于自定义指令

@ued/g7s内的自定义指令，都在vue安装g7s插件的时候自动注册。我们只需要在相应的地方使用，常用的如goto,clickout等


## 备注
如有问题，请联系开发维护人员