<template>
  <div class="my">
    <PageHeader content="变量是选择器的名字"/>
    <div class="box banner">
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
  name: 'VariablesDemo2',
}
</script>

<style scoped lang="less">
/*.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}*/

// 声明变量
@my-selector: banner;

// 使用
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
</style>
