<template>
  <div class="my">
      <PageHeader content="each循环和range生成一组数"/>
      <div class="box box-1">
          <p class="txt">这是一个方块</p>
      </div>
      <div class="box box-2">
          <p class="txt">这是一个方块</p>
      </div>
      <div class="box box-3">
          <p class="txt">这是一个方块</p>
      </div>
      <div class="box box-4">
          <p class="txt">这是一个方块</p>
      </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'FunctionsDemo10',
}
</script>

<style scoped lang="less">
    each(range(4), {
        .box-@{value} {
            height: (@value * 50px);
        }
    });
</style>
