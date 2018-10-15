### Drawer
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容，用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
#### 何时使用
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

代码演示

##### 生成不同方向的drawer
```
<template>
  <div class="wrap">
        <v-radio v-model="placement" label="top">上</v-radio>
        <v-radio v-model="placement" label="right">右</v-radio>
        <v-radio v-model="placement" label="bottom">下</v-radio>
        <v-radio v-model="placement" label="left">左</v-radio>
        <v-button @click="openDrawer">open</v-button>
        <drawer
            :visible="showDrawer"
            :placement="placement"
            :closable=false
            height="450px"
            width="600px"
            :maskClosable=true
            :mask=true
            :close="closeDrawer">
            <p>aaaa</p>
        </drawer>
    </div>
</template>
<script type="text/ecmascript-6">
import drawer from './drawer.vue';

export default {
    data() {
        return {
            placement: 'right',
            showDrawer: false,
        };
    },
    methods: {
        openDrawer() {
            this.showDrawer = true;
        },
        closeDrawer() {
            this.showDrawer = false;
        },
    },
};
</script>
```
##### 生成二级drawer

```
<template>
    
    <div class="home-page page-common">
        <div class="wrap">
            <v-button @click="openDrawer">open</v-button>
            <drawer
            :visible="showDrawer"
            :placement="placement"
            :closable=false
            height="450px"
            width="600px"
            :maskClosable=true
            :mask=true
            :close="closeDrawer">
            <p>aaaa</p>
            <v-button @click="openSecondDrawer">open second drawer</v-button>
                <drawer
                slot='nest'
                placement="bottom"
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
            secondDrawer: false,
            maskStyle: {
                background: 'red',
            },
        };
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
    },
};
</script>
```



## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 是否显示右上角的关闭按钮 | boolean | true |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| mask | 是否展示遮罩 | Boolean | true |
| maskStyle | 遮罩样式 | object | {} |
| style | 可用于设置 Drawer 的样式，调整浮层位置等 | object | - |
| title | 标题 | string \| ReactNode | - |
| visible | Drawer 是否可见 | boolean | - |
| width | 宽度 | string \| number | 256px |
| height | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 256px |
| placement | 抽屉的方向 | 'top'  \| 'right' \| 'bottom' \| 'left' | 'right'
| close | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | 无 |


