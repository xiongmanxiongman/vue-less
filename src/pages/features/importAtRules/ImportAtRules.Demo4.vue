<template>
  <div class="my">
    <PageHeader content="加了once的多次导入"/>
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
  name: 'ImportAtRulesDemo4',
}
</script>

<style scoped lang="less">
@import (once) "../../../../src/themes/red.less";
@import (once) "../../../../src/themes/red.less";
//这个无效
@import (once) "../../../../src/themes/red.less";
//这个无效
@import (once) "../../../../src/themes/red.less"; //这个无效
</style>
