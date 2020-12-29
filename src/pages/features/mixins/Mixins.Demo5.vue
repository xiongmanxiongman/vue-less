<template>
  <div class="my">
    <PageHeader content="json点的方式调用混入2"/>
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
  name: 'MixinsDemo5',
}
</script>

<style scoped lang="less">
#my-library {
  .my-mixin() {
    color: red;
  }
}

.box {
  #my-library.my-mixin();
}
</style>
