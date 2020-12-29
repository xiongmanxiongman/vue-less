<template>
  <div class="my">
    <PageHeader content="合并样式1逗号用+"/>
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
  name: 'MergeDemo1',
}
</script>

<style scoped lang="less">
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}

.box {
  .mixin();
  box-shadow+: 0 0 20px black;
}

/*.box {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}*/
</style>
