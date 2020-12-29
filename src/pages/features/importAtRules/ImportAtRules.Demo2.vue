<template>
  <div class="my">
    <PageHeader content="导入非less文件"/>
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
  name: 'ImportAtRulesDemo2',
}
</script>

<style scoped lang="less">
@import (less) "../../../../src/themes/test.txt";
</style>
