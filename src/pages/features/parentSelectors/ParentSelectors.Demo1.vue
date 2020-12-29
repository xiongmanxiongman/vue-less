<template>
  <div class="my">
    <PageHeader content="a标签的hove写法"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a href="javascript:;">这是一个a标签</a>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ParentSelectorsDemo1',
}
</script>

<style scoped lang="less">
/*a {
  color: blue;
}

a:hover {
  color: green;
}*/
a {
  color: blue;

  &:hover {
    color: green;
  }
}
</style>
