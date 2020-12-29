<template>
  <div class="my">
    <PageHeader content="将样式通过配置项分离"/>
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
  name: 'DetachedRulesetsDemo4',
}
</script>

<style scoped lang="less">
@config: {
  option1: true;
  option2: false;
}

.mixin() when (@config[option1] = true) {
  background: red;
}

.mixin() when (@config[option2] = true) {
  color: blue;
}

.box {
  .mixin();
}

.txt {
  .mixin();
}
</style>
