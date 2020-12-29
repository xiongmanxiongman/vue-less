<template>
  <div class="my">
    <PageHeader content="将样式通过变量分离"/>
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
  name: 'DetachedRulesetsDemo1',
}
</script>

<style scoped lang="less">
@detached-ruleset: {
  background: red;
};
.box {
  @detached-ruleset();
}
</style>
