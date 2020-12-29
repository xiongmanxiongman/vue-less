<template>
  <div class="my">
    <PageHeader content="child继承"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
      <p class="txt">这是一个方块</p>
      <p class="txt">这是一个方块</p>
      <p class="txt">这是一个方块</p>
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
  name: 'ExtendDemo8',
}
</script>

<style scoped lang="less">
:nth-child(1n+3) {
  color: blue;
}

.box:extend(:nth-child(n+3)) {
}
</style>
