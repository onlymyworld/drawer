<template>
    <div>
        <div class="menu-box">
            <v-menu mode="inline" :data="collapsedMenuData" theme="dark" :inline-collapsed="collapsed" @item-click="go" :expand="true"></v-menu>
        </div>
        <section style="margin-left: 240px;">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
export default {
    data: () => ({
        collapsed: false,
        collapsedMenuData: [{
            name: '父菜单',
            children: [{
                name: '子菜单一',
                router: 'home',
            }, {
                name: '子菜单二',
                router: {
                    name: 'demo',
                },
            }],
        }],
    }),
    methods: {
        go(e) {
            e.forEach((element) => {
                if (element.selected && element.router) {
                    if (typeof element.router === 'string') {
                        this.$router.push({
                            name: element.router,
                        });
                    } else {
                        this.$router.push(element.router);
                    }
                }
            });
        },
    },
};
</script>
<style scoped>
    .menu-box {
        width: 240px;
        height: 100%;
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        background-color: #404040;
    }
</style>

<style lang="less">
    .pagination-wrapper {
        width: 100%;
        margin-top: 20px;
        p {
            display: inline-block;
            max-width: 300px;
            line-height: 28px;
        }
    }
</style>
