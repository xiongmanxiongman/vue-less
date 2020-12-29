<template>
  <div class="my">
    <PageHeader content="extract函数找到数组中的第n个"/>
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
  name: 'FunctionsDemo6',
}
</script>

<style scoped lang="less">
    @list: red, blue, green, yellow;
    .box {
        background: extract(@list, 3);
    }
</style>
