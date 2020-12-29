<template>
  <div class="my">
    <PageHeader content="加了multiple的多次导入"/>
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
  name: 'ImportAtRulesDemo5',
}
</script>

<style scoped lang="less">
@import (multiple) "../../../../src/themes/red.less";
//都有效
@import (multiple) "../../../../src/themes/red.less";
//都有效
@import (multiple) "../../../../src/themes/red.less";
//都有效
@import (multiple) "../../../../src/themes/red.less"; //都有效

/*实际效果*/
/*.red[data-v-f14210b6] {
  background: red;
}

 .red[data-v-f14210b6] {
   background: red;
 }

 .red[data-v-f14210b6] {
   background: red;
 }

 .red[data-v-f14210b6] {
   background: red;
 }*/


</style>
