<template>
  <div class="my">
    <PageHeader content="!important的书写方式"/>
    <div class="box unimportant">
      <p class="txt important">这是一个方块</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'MixinsDemo7',
}
</script>

<style scoped lang="less">
.foo (@bg: #f5f5f5; @color: #900) {
  background: @bg;
  color: @color;
}

.unimportant {
  .foo();
}

.important {
  .foo() !important;
}
</style>
