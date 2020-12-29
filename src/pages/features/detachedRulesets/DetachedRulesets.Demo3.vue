<template>
  <div class="my">
    <PageHeader content="将样式通过变量分离再导入"/>
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
  name: 'DetachedRulesetsDemo3',
}
</script>

<style scoped lang="less">
/*
orientation：portrait | landscape
portrait：
指定输出设备中的页面可见区域高度大于或等于宽度
landscape：
除portrait值情况外，都是landscape
*/

@my-ruleset: {
  .box {
    background-color: red;
  }
};
@media (orientation: landscape) {
  @my-ruleset();
}

/*@media (orientation: landscape){
  .box {
    background-color: red;
  }
}*/
</style>
