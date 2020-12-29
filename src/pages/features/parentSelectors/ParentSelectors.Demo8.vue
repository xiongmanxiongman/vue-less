<template>
  <div class="my">
    <PageHeader content="这里是示例标题"/>
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
  name: 'ParentSelectorsDemo8',
}
</script>

<style scoped lang="less">

</style>
