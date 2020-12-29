<template>
  <div class="my">
    <PageHeader content="if语句iscolor函数"/>
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
  name: 'FunctionsDemo1',
}
</script>

<style scoped lang="less">
@some: foo;

.box {
  margin: if((2 > 1), 0, 3px);
  background: if((iscolor(@some)), @some, red);
}
</style>
