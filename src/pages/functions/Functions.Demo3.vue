<template>
  <div class="my">
    <PageHeader content="escape函数"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'FunctionsDemo3',
}
</script>

<style scoped lang="less">
.box {
  value: escape('https://mbjy.ijilu.cn/mbjy/page/admin/home/user/userDetails/userDetails.html?id=721cf462ad6a98ae2a5be37bdff9098e');
  value2: unescape('https%3A//mbjy.ijilu.cn/mbjy/page/admin/home/user/userDetails/userDetails.html?id%3D721cf462ad6a98ae2a5be37bdff9098e');
}
</style>
