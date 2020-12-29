<template>
  <div class="my">
    <PageHeader content="变量定义在后面"/>
    <div class="box lazy-eval">
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
  name: 'VariablesDemo7',
}
</script>

<style scoped lang="less">
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;


/*.lazy-eval {
  width: @var;
  @a: 9%;
}

@var: @a;
@a: 100%;*/

/*.lazy-eval {
  width: 9%;
}*/
</style>
