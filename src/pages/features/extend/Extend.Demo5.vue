<template>
  <div class="my">
    <PageHeader content="继承tr标签的样式"/>
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
  name: 'ExtendDemo5',
}
</script>

<style scoped lang="less">
.bucket {
  tr {
    background: blue;
  }
}

.box:extend(.bucket tr) {
}
</style>
