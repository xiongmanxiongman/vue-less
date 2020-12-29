<template>
  <div class="my">
    <PageHeader content="插件的写法2-函数padding"/>
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
  name: 'PluginAtRulesDemo2',
}
</script>

<style scoped lang="less">
@plugin "plugin2";
.txt {
  padding: pi();
}
</style>
