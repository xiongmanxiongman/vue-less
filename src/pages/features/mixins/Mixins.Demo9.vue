<template>
  <div class="my">
    <PageHeader content="重复覆盖混入"/>
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
  name: 'MixinsDemo9',
}
</script>

<style scoped lang="less">
.mixin(@color) {
  color: @color;
}

.mixin(@color, @padding: 10px) {
  color: @color;
  padding: @padding;
}

.mixin(@color, @padding, @margin: 20px) {
  color: @color;
  padding: @padding;
  margin: @margin @margin @margin @margin;
}

.txt {
  background: red;
  border: 1px solid #cccccc;
  .mixin(#008000);
}
</style>
