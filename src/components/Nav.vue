<template>
  <el-menu
      default-active="1"
      class="el-menu-top"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1">
      <router-link to="/">首页Home</router-link>
    </el-menu-item>
    <el-menu-item><a href="//css.ijilu.cn/css/vueLess/" target="_blank">项目文档</a></el-menu-item>
    <el-submenu  index="3">
      <template slot="title">参考资料</template>
      <el-menu-item><a class="link" href="http://lesscss.org/" target="_blank">less官网</a></el-menu-item>
      <el-menu-item><a class="link" href="https://cn.vuejs.org/v2/guide/" target="_blank">vue官网</a></el-menu-item>
      <el-menu-item><a class="link" href="https://router.vuejs.org/zh/guide/#html" target="_blank">vue-router官网</a></el-menu-item>
      <el-menu-item><a class="link" href="https://cli.vuejs.org/zh/guide/creating-a-project.html" target="_blank">vue-cli官网</a></el-menu-item>
      <el-menu-item><a class="link" href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank">element-ui官网</a></el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped lang="less">
.el-menu-top{
  border-bottom: 0;
  border-left: 1px solid #e6e6e6;

  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    text-decoration: none;
  }

  .el-menu-item {
    padding: 0;
  }
}
.el-menu{
  .link{
    text-decoration: none;
    display: flex;
    color: #fff;
  }
}
</style>
