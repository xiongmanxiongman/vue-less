<template>
  <div class="my">
    <PageHeader content="变量是图片url"/>
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
  name: 'VariablesDemo3',
}
</script>

<style scoped lang="less">
// 声明变量
@images: "../../../assets";

// 使用
.box {
  color: #444;
  background: url("@{images}/logo.png") no-repeat center;
}
</style>
