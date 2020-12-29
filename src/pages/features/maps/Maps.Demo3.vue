<template>
  <div class="my">
    <PageHeader content="使用变量的值"/>
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
  name: 'MapsDemo3',
}
</script>

<style scoped lang="less">
@config: {
  @options: {
    library-on: true
  }
}

& when (@config[@options][library-on] = true) {
  .box {
    background: red;
  }
}
</style>
