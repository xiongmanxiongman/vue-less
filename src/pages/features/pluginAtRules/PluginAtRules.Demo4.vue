<template>
  <div class="my">
    <PageHeader content="调用插件中的多个函数"/>
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
  name: 'PluginAtRulesDemo4',
}
</script>

<style scoped lang="less">
@plugin "plugin4";
.txt {
  padding: foo();
  margin: pi()*3;
}
</style>
