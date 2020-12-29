<template>
  <div class="my">
    <PageHeader content="继承写法3"/>
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
  name: 'ExtendDemo3',
}
</script>

<style scoped lang="less">
.big-division,
.big-bag:extend(.bag),
.big-bucket:extend(.bucket) {

}
</style>
