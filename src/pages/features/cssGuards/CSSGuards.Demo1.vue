<template>
  <div class="my">
    <PageHeader content="通过when判断"/>
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
  name: 'CSSGuardsDemo1',
}
</script>

<style scoped lang="less">
@my-option: true;
.my-optional-style() when (@my-option = true) {
  .box {
    color: red;
  }
}

.my-optional-style();
</style>
