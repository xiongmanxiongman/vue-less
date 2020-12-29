<template>
  <div class="my">
    <PageHeader content="这是LESS示例首页,示例包含:"/>
    <el-card class="box-card">
      <router-link to="/VariablesDemo1">1.变量</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/ParentSelectorsDemo1">2.父类选择器</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/ExtendDemo1">3.继承</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/MergeDemo1">4.合并</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/MixinsDemo1">5.混合</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/CSSGuardsDemo1">6.if选择器</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/DetachedRulesetsDemo1">7.分离</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/ImportAtRulesDemo1">8.导入</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/PluginAtRulesDemo1">9.插件</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/MapsDemo1">10.映射</router-link>
    </el-card>
    <el-card class="box-card">
      <router-link to="/FunctionsDemo1">11.函数</router-link>
    </el-card>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'overview'
}
</script>

<style scoped lang="less">
.my {
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .box-card {
    width: 180px;
    margin-bottom: 10px;

    a {
      color: #333;
      text-decoration: none;
      display: flex;
    }
  }
}
</style>
