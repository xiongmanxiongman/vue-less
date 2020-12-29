<template>
  <div class="my">
    <PageHeader content="length函数"/>
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
  name: 'FunctionsDemo5',
}
</script>

<style scoped lang="less">
@list: "banana", "tomato", "potato", "peach";
.box {
  value: length(@list);
}
</style>
