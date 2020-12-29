<template>
  <div class="my">
    <PageHeader content="通过if判断"/>
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
  name: 'CSSGuardsDemo4',
}
</script>

<style scoped lang="less">

@my-option: true;
@dr: if(@my-option = true, {
  .box {
    background: yellow;

    .txt {
      color: green;
    }
  }
});
@dr();
</style>
