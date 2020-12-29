<template>
  <div class="my">
    <PageHeader content="举个复杂例子"/>
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
  name: 'PluginAtRulesDemo6',
}
</script>

<style scoped lang="less">
@plugin "plugin6";
@var: 0;
store(@var);
store(222);
store(@var);
.txt {
  @plugin "plugin6";
  background: rgb(retrieve());
}
</style>
