<template>
  <div class="my">
    <PageHeader content="继承所有样式"/>
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
  name: 'ExtendDemo10',
}
</script>

<style scoped lang="less">
.a.b.test,
.test.c {
  color: orange;
}

.test {
  &:hover {
    color: green;
  }
}

.replacement:extend(.test all) {
}


/*.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c {
  color: orange;
}
.test:hover,
.replacement:hover {
  color: green;
}*/
</style>
