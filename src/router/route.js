export default {
    routes: [{
        path: '/',
        redirect: '/home',
    }, {
        path: '/home',
        name: 'home',
        component: resolve => require(['../views/home'], resolve),
        meta: {
            breadcrumb: {
                title: '首页',
                path: '首页/**',
            },
        },
    }, {
        path: '/demo',
        name: 'demo',
        component: resolve => require(['../views/demo'], resolve),
        meta: {
            breadcrumb: {
                title: 'demo',
                path: 'g7s/demo',
            },
        },
    }, 
    {
        path: '/drawer',
        name: 'drawer',
        component: resolve => require(['../views/drawer'], resolve),
        meta: {
            breadcrumb: {
                title: '抽屉',
                path: '抽屉/**',
            },
        },
    },
    {
        path: '/error/:code',
        name: 'error',
        component: resolve => require(['../views/error'], resolve),
    }, {
        path: '*',
        redirect: '/error/404',
    }],
};
