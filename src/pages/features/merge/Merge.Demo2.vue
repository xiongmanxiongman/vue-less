<template>
  <div class="my">
    <PageHeader content="合并样式2空格用+_"/>
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
  name: 'MergeDemo2',
}
</script>

<style scoped lang="less">
.mixin() {
  transform+_: scale(2);
}

.box {
  .mixin();
  transform+_: rotate(15deg);
}

/*.box {
  transform: scale(2) rotate(15deg);
}*/
</style>
