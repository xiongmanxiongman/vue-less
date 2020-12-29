<template>
  <div class="my">
    <PageHeader content="range函数生成一组数"/>
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
  name: 'FunctionsDemo7',
}
</script>

<style scoped lang="less">
    .box {
        value1: range(4);
        value2: range(10px, 30px, 10);
        value3: range(10px, 100px, 10);
        value4: range(10em, 100em, 10);
        value5: range(10rem, 100rem, 10);
        value6: range(10%, 100%, 10);
    }
</style>
