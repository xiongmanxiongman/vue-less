<template>
  <div class="my">
    <PageHeader content="boolean函数 luma函数"/>
    <div class="box">
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
  name: 'FunctionsDemo2',
}
</script>

<style scoped lang="less">
/*luma*/
/*Returns: percentage 0-100%
Example: luma(rgb(100, 200, 30))
Output: 44%*/
@bg: black;
@bg-light: boolean(luma(@bg) > 50%);

.box {
  background: @bg;
  color: if(@bg-light, black, white);
}
</style>
