<template>
  <div class="my">
      <PageHeader content="each循环"/>
      <div class="box box-one-1">
          <p class="txt">这是一个方块</p>
      </div>
      <div class="box box-two-2">
          <p class="txt">这是一个方块</p>
      </div>
      <div class="box box-three-3">
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
  name: 'FunctionsDemo8',
}
</script>

<style scoped lang="less">
    @set: {
        one: blue;
        two: green;
        three: red;
    }

    each(@set, {
        .box-@{key}-@{index} {
            background: @value;
        }
    });
</style>
