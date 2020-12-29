<template>
  <div class="my">
    <PageHeader content="使用时乘3"/>
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
  name: 'PluginAtRulesDemo3',
}
</script>

<style scoped lang="less">
@plugin "plugin3";
.txt {
  padding: pi()*3;
}
</style>
