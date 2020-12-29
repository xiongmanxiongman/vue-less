<template>
  <div class="my">
    <PageHeader content="混合的多参数使用"/>
    <div class="box box1">
      <p class="txt">这是一个方块</p>
    </div>
    <div class="box box2">
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
  name: 'MixinsDemo10',
}
</script>

<style scoped lang="less">
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
.box1 {
  .mixin(@margin: 20px; @color: #33acfe);
}
.box2 {
  .mixin(#efca44; @padding: 40px);
}
</style>
