<template>
  <div class="my">
    <PageHeader content="使用邻近定义的颜色"/>
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
  name: 'VariablesDemo9',
}
</script>

<style scoped lang="less">
.box {
  color: #efefef;
  background-color: $color;

  p {
    color: #000;
  }
}

/*.box {
  color: #efefef;
  background-color: #efefef;
}*/


/*.box {
  color: red;
  .txt {
    background-color: $color;
  }
  color: blue;
}*/

/*.box {
  color: red;
  color: blue;
}
.block .txt {
  background-color: blue;
}*/
</style>
