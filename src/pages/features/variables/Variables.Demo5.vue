<template>
  <div class="my">
    <PageHeader content="变量数属性名"/>
    <div class="box widget">
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
  name: 'VariablesDemo5',
}
</script>

<style scoped lang="less">
@property: color;

.widget {
    @{property}: #0ee;
  background-@{property}: #999;
}

/*.widget {
  color: #0ee;
  background-color: #999;
}*/
</style>
