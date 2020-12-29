<template>
  <div class="my">
    <PageHeader content="覆盖样式包里的变量"/>
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
  name: 'VariablesDemo10',
}
</script>

<style scoped lang="less">
// 导入样式
@import "library.less";

@base-color: red;
.box {
  background: @base-color;

  .txt {
    background: @dark-color;
  }
}
</style>
