import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        page: { // 页面布局相关模块，与门户的高度问题，以及解决滚动问题
            namespaced: true,
            state: {
                clientHeight: -1,
                scrollTop: -1,
                loading: true,
            },
            mutations: {
                update(state, payload) {
                    if (typeof payload === 'object') {
                        for (const [key, value] of Object.entries(payload)) {
                            state[key] = value;
                        }
                    }
                },
            },
        },
    },
});

window.store = store;

export default store;
