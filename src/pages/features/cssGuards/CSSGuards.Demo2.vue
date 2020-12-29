<template>
  <div class="my">
    <PageHeader content="通过when判断写法2"/>
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
  name: 'CSSGuardsDemo2',
}
</script>

<style scoped lang="less">
@my-option: true;
.box when (@my-option = true) {
  background: blue;
}
</style>
