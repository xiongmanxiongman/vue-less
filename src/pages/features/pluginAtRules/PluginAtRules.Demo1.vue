<template>
  <div class="my">
    <PageHeader content="第一个插件-函数margin"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'PluginAtRulesDemo1',
}
</script>

<style scoped lang="less">
@plugin "plugin1"; // 不写js,默认识别.js结尾的
.txt {
  margin: pi();
}
</style>
