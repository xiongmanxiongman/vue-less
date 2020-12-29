<template>
  <div class="my">
    <PageHeader content="混入2个样式"/>
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
  name: 'MixinsDemo2',
}
</script>

<style scoped lang="less">
.my-mixin {
  color: red;
}

.my-other-mixin() {
  background: blue;
}

.box {
  .my-mixin();
  .my-other-mixin();
}
</style>
