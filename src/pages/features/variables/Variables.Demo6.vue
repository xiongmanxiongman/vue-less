<template>
  <div class="my section">
    <PageHeader content="变量是颜色值2"/>
    <div class="box element">
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
  name: 'VariablesDemo6',
}
</script>

<style scoped lang="less">
@primary: green;
@secondary: blue;

.section {
  @color: primary;

  .element {
    color: @@color;
  }
}

/*.section .element {
  color: green;
}*/
</style>
