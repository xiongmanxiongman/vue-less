<template>
  <div class="my">
    <PageHeader content="引入多个插件"/>
    <div class="box">
      <p class="txt txt1">这是一个方块1</p>
    </div>
    <div class="box">
      <p class="txt txt2">这是一个方块2</p>
    </div>
  </div>
</template>
<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'PluginAtRulesDemo5',
}
</script>

<style scoped lang="less">
.txt1 {
  @plugin "plugin1";
  margin: pi();
}

.txt2 {
  @plugin "plugin2";
  padding: pi();
}
</style>
