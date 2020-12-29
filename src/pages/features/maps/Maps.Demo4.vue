<template>
  <div class="my">
    <PageHeader content="嵌套调用"/>
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
  name: 'MapsDemo4',
}
</script>

<style scoped lang="less">
.foods() {
  @dessert: ice cream;
}

@key-to-lookup: dessert;

.box {
  value: .foods[@@key-to-lookup];
}
</style>
