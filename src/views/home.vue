<template>
    
    <div class="home-page page-common">
        <div class="wrap">
            <v-radio v-model="placement" label="top">上</v-radio>
            <v-radio v-model="placement" label="right">右</v-radio>
            <v-radio v-model="placement" label="bottom">下</v-radio>
            <v-radio v-model="placement" label="left">左</v-radio>
            <v-button @click="openDrawer">open</v-button>
            <v-button @click="openMutiDrawer">MutiDrawer</v-button>
            <drawer
            :visible="showDrawer"
            :placement="placement"
            :closable=true
            :maskclosable=true
            :mask=true
            :close="closeDrawer">
            <p>aaaa</p>
            </drawer>
            <drawer
            :visible="mutiDrawer"
            :placement="placement"
            :closable=false
            height="450px"
            width="600px"
            :maskclosable=true
            :mask=true
            :close="closeMutiDrawer">
            <p>aaaa</p>
            <v-button @click="openSecondDrawer">open second drawer</v-button>
                <drawer
                slot='nest'
                :placement=placement
                :visible="secondDrawer"
                :close="closeSecondDrawer">
                </drawer> 
            </drawer>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import drawer from './drawer.vue';

export default {
    data() {
        return {
            placement: 'right',
            showDrawer: false,
            mutiDrawer: false, // 多层drawer
            secondDrawer: false,
            maskStyle: {
                background: 'red',
            },
        };
    },
    components: {
        drawer,
    },
    created() {
    },
    methods: {
        openDrawer() {
            this.showDrawer = true;
        },
        closeDrawer() {
            this.showDrawer = false;
        },
        openSecondDrawer() {
            this.secondDrawer = true;
        },
        closeSecondDrawer() {
            this.secondDrawer = false;
        },
        openMutiDrawer() {
            this.mutiDrawer = true;
        },
        closeMutiDrawer() {
            this.mutiDrawer = false;
        },
    },
};
</script>

<style scoped lang="less">
    .home-page {
        font-size: 16px;
        h3 {
            margin: 20px 0;
        }
        .wrap {
            height: 300px;
            width: 300px;
        }
    }

</style>
