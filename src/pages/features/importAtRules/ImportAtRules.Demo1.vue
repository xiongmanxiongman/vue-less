<template>
  <div class="my">
    <PageHeader content="导入样式"/>
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
  name: 'ImportAtRulesDemo1',
}
</script>

<style scoped lang="less">
.red {
  background: green;
}

@import "../../../../src/themes/red.less";
@import "../../../../src/themes/blue.less";
@import "../../../../src/themes/pink.less";
@import "../../../../src/themes/yellow.less";
</style>
