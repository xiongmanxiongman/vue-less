<template>
  <div class="my">
    <PageHeader content="混入的方式写浏览器兼容前缀"/>
    <div class="box box1">
      <p class="txt">这是一个方块这是一个方块这是一个方块这是一个方块这是一个方块这是一个方块这是一个方块</p>
    </div>
    <div class="box box2">
      <p class="txt">这是一个圆形</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'MixinsDemo8',
}
</script>

<style scoped lang="less">
/*.border-radius(@radius) {
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
  border-radius: @radius;
}*/
/*可以添加默认值*/
.border-radius(@radius: 5px) {
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
  border-radius: @radius;
}

#header {
  .border-radius(4px);
}

.button {
  .border-radius(6px);
}

.box1 {
  .border-radius();
}

.box2 {
  .border-radius(50%);
}

/*写一个溢出隐藏*/
.ellipsis(@width:200px) {
  width: @width;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.txt {
  .ellipsis(100px);
}
</style>
