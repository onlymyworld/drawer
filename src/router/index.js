import Vue from 'vue';
import Router from 'vue-router';
import { g7s } from '@ued/g7s/libs/util';
import routes from './route';
import store from '../store';

Vue.use(Router);

const routerInstance = new Router(routes);

routerInstance.beforeEach(async (to, from, next) => {
    store.commit('updateState', {
        loading: true,
    });
    if (to.meta.breadcrumb) {
        g7s.breadcrumb(to.meta.breadcrumb);
    }
    next();
});

routerInstance.afterEach(async (to) => {
    store.commit('updateState', {
        loading: false,
    });
    if (to.meta.breadcrumb) {
        g7s.breadcrumb(to.meta.breadcrumb);
    }
});

routerInstance.onError((e) => {
    if (e.toString() === 'Error: cancel') {
        store.commit('updateState', {
            loading: false,
        });
    }
});

// window.routerInstance = routerInstance;

export default routerInstance;
