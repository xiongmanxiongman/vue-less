<template>
  <div class="my">
    <PageHeader content="不断的覆盖变量值"/>
    <div class="box">
      文字
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
  name: 'VariablesDemo8',
}
</script>

<style scoped lang="less">
@var: #fff;
.box {
  @var: red;

  .txt {
    @var: #000;
    color: @var;
    @var: blue;
  }

  color: @var;
}

/*.box {
  color: red;
}
.box .txt {
  color: blue;
}*/
</style>
