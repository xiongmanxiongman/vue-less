<template>
  <div class="x-content">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ContentArea',
}
</script>

<style scoped lang="less">
.x-content{
  padding: 20px;
}
</style>
