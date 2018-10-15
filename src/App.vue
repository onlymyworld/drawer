<template>
    <div id="entry" :style="g7sHeight">
        <router-view></router-view>
    </div>
</template>
<script>
    import height from '@ued/g7s/mixins/height';

    export default {
        mixins: [height],
    };
</script>

<style scoped lang="less">
    #entry {
        height: 100%;
    }
</style>