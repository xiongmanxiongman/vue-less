<template>
  <div class="my">
    <PageHeader content="带判断when的书写方式"/>
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
  name: 'MixinsDemo6',
}
</script>

<style scoped lang="less">
@mode: huge;
#namespace when (@mode = huge) {
  .mixin() { /* */
  }
}

#namespace {
  .mixin() when (@mode = huge) { /* */
  }
}
</style>
