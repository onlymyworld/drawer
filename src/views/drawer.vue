<template>
    <div>
        <div :class="['vue-drawer',visible && 'vue-drawer-open','vue-drawer-'+ placement]">
            <div v-if="mask" class="vue-drawer-mask" @click="closeDrawer" :style="maskStyle"></div>
            <div :class="['vue-drawer-content-wrapper',!visible && 'vue-drawer-content-close']"
            :style="[{width: calWidth},style,{height: calHeight}]">
                <div class="vue-drawer-content">
                    <div class="vue-drawer-header">
                        <div class="vue-drawer-title">{{title}}</div>
                    </div>
                    <button class='vue-drawer-close' @click="close" v-if="closable">
                        <span class="vue-drawer-close-x">
                            <i class="anticon anticon-close">
                                <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <g class="plus">
                                        <path d="M16,11 L16,21"></path>
                                        <path d="M11,16 L21,16"></path>
                                    </g>
                                </svg>
                            </i>
                        </span>
                    </button>
                    <div class="vue-drawer-wrapper-body">
                        <div class="vue-drawer-body">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot name='nest'></slot>
    </div>
</template>
<script>

export default {
    el: 'body',
    data() {
        return {
        };
    },
    props: {
        placement: { // drawer展示位置
            type: String,
            default: 'right',
        },
        closable: { // 是否显示关闭按钮
            type: Boolean,
            default: false,
        },
        maskclosable: { //
            type: Boolean,
            default: true,
        },
        mask: {
            type: Boolean,
            default: true,
        },
        maskStyle: {
            type: Object,
            default() {
                return {};
            },
        },
        style: { // 
            type: Object,
            default() {
                return {};
            },
        },
        title: {
            type: String,
            default: 'Basic Drawer',
        },
        visible: {
            type: Boolean,
            default: false,
        },
        close: {
            type: Function,
        },
        height: {
            type: String,
            default: '256px',
        },
        width: {
            type: String,
            default: '256px',
        },
    },
    computed: {
        calWidth() {
            if (this.placement !== 'left' && this.placement !== 'right') {
                return '100%';
            }
            return this.width;
        },
        calHeight() {
            if (this.placement !== 'top' && this.placement !== 'bottom') {
                return '100%';
            }
            return this.height;
        },
    },
    mounted() {
        
    },
    methods: {
        closeDrawer() {
            if (this.maskclosable) {
                this.close();
            }
            return false;
        },
    },
};
</script>

<style scoped lang="less">
@prefixCls:  ~"vue-drawer";
    .@{prefixCls} {
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        background: #fff;
        & > * {
            -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
            transition: -webkit-transform 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
            transition: transform 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
            transition: transform 0.3s cubic-bezier(0.9, 0, 0.3, 0.7), -webkit-transform 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
        }
        &-open {
            -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
            transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
            transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
            transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1), -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
            .@{prefixCls}-mask {
                opacity: 0.3;
                height: 100%;
                -webkit-animation: antdDrawerFadeIn 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
                animation: antdDrawerFadeIn 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
                -webkit-transition: none;
                transition: none;
            }
        }
        &-mask{
            position: fixed;
            width: 100%;
            height: 0;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.65);
            filter: alpha(opacity=50);
            -webkit-transition: opacity 0.3s linear, height 0s ease 0.3s;
            transition: opacity 0.3s linear, height 0s ease 0.3s;
        }
        &-open&-left {
           .@{prefixCls}-content-wrapper{
                box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
            } 
        }
        &-left{
            .@{prefixCls}-content-wrapper{
                left: 0px;
            }
            .@{prefixCls}-content-close {
                transform: translateX(-100%);
            }
        }
        &-right {
            .@{prefixCls}-content-wrapper{
                right: 0px;
            }
            .@{prefixCls}-content-close {
                transform: translateX(100%);
            }
        }
        &-open&-right {
           .@{prefixCls}-content-wrapper{
                box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
            } 
        }
        &-top {
            .@{prefixCls}-content-wrapper{
                top: 0px;
            }
            .@{prefixCls}-content-close {
                transform: translateY(-100%);
            }
        }
        &-open&-top {
           .@{prefixCls}-content-wrapper{
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            } 
        }
        &-bottom {
            .@{prefixCls}-content-wrapper{
                bottom: 0px;
            }
            .@{prefixCls}-content-close {
                transform: translateY(100%);
            }
        }
        &-open&-bottom {
           .@{prefixCls}-content-wrapper{
                box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
            } 
        }
        &-content-wrapper {
            position: fixed;
            height: 100%;
        }
        &-content{
            height: 100%;
            width: 100%;
            position: relative;
            background-color: #fff;
            border: 0;
            background-clip: padding-box;
            z-index: 1;
        }
        &-header {
            padding: 16px 24px;
            border-radius: 4px 4px 0 0;
            background: #fff;
            color: rgba(0, 0, 0, 0.65);
            border-bottom: 1px solid #e8e8e8;
        }
        &-close {
            cursor: pointer;
            border: 0;
            background: transparent;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 10;
            font-weight: 700;
            line-height: 1;
            text-decoration: none;
            -webkit-transition: color 0.3s;
            transition: color 0.3s;
            color: rgba(0, 0, 0, 0.45);
            outline: 0;
            padding: 0;
            &-x {
                display: block;
                font-style: normal;
                text-align: center;
                text-transform: none;
                text-rendering: auto;
                width: 56px;
                height: 56px;
                line-height: 70px;
                font-size: 16px;
            }
            .anticon{
                display: inline-block;
                font-style: normal;
                vertical-align: -0.125em;
                text-align: center;
                text-transform: none;
                line-height: 0;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            .plus {
                transform-origin: 50% 50%;
                transition: all 0.8s ease;
                transform: rotate(45deg);
                path {
                    stroke-width: 2;
                    stroke: #ccc;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
            }
        }
        &-wrapper-body {
            padding: 24px;
        }
        &-footer {
            position: absolute;
            bottom: 0px;
            width: 100%;
            border-top: 1px solid rgb(232, 232, 232);
            padding: 10px 16px;
            text-align: right;
            left: 0px;
            background: rgb(255, 255, 255);
            border-radius: 0px 0px 4px 4px;
        }

    }
    
@-webkit-keyframes antdDrawerFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.3;
  }
}
@-keyframes antdDrawerFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.3;
  }
}
@-moz-keyframes antdDrawerFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.3;
  }
}
@-o-keyframes antdDrawerFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
