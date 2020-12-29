<template>
  <div class="my">
    <PageHeader content="继承样式1"/>
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
  name: 'ExtendDemo1',
}
</script>

<style scoped lang="less">
.box {
  &:extend(.red);
  background: blue;
}

.red {
  color: red;
}

/*.box {
  background: blue;
}
.red,
.box {
  color: red;
}*/
</style>
