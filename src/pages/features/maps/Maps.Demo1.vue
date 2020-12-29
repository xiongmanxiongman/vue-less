<template>
  <div class="my">
    <PageHeader content="使用json的值"/>
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
  name: 'MapsDemo1',
}
</script>

<style scoped lang="less">
@sizes: {
  mobile: 320px;
  tablet: 768px;
  desktop: 1024px;
}

.box {
  width: @sizes[tablet];
}
</style>
