<template>
  <div class="my">
    <PageHeader content="变量是import路径"/>
    <div class="box red">
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
  name: 'VariablesDemo4',
}
</script>

<style scoped lang="less">
// Variables
@themes: "../../../../src/themes";

// Usage
@import "@{themes}/red.less";
</style>
