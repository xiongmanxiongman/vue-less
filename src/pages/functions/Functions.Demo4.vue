<template>
  <div class="my">
    <PageHeader content="replace函数"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'FunctionsDemo4',
}
</script>

<style scoped lang="less">


.box {
  value1: replace("Hello, Mars?", "Mars\?", "Earth!");
  value2: replace("One + one = 4", "one", "2", "gi");
  value3: replace('This is a string.', "(string)\.$", "new $1.");
  value4: replace(~"bar-1", '1', '2');
}
</style>
