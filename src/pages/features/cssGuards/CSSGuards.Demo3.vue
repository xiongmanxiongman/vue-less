<template>
  <div class="my">
    <PageHeader content="通过when判断写法3"/>
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
  name: 'CSSGuardsDemo3',
}
</script>

<style scoped lang="less">
@my-option: true;
& when (@my-option = true) {
  .box {
    background: red;

    .txt {
      color: blue;
    }
  }
}
</style>
