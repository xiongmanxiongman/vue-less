<template>
  <div class="my">
    <PageHeader content="将样式通过函数的参数导入进去"/>
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
  name: 'DetachedRulesetsDemo2',
}
</script>

<style scoped lang="less">

/*

<	小于号	&lt;
>	大于号	&gt;

*/
.desktop(@rules) {
  @media screen and (min-width: 1200px) { @rules();
  }
}

.box {
  background-color: blue;
  .desktop({
    background-color: red;
  });
}

/*输出结果*/
/*.box {
  background-color: blue;
}
@media screen and (min-width: 1200px) {
  .box {
    background-color: red;
  }
}
*/
</style>
