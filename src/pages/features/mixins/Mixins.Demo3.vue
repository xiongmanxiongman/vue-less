<template>
  <div class="my">
    <PageHeader content="混入一个带hove的样式"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a class="link" href="javascript:;">这是一个a标签</a>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'MixinsDemo3',
}
</script>

<style scoped lang="less">
.my-hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}

.link {
  .my-hover-mixin();
}

</style>
