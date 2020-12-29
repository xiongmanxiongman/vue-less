<template>
  <div class="my">
    <PageHeader content="继承的写法4"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a class="link" href="javascript:;">这是一个a链接</a>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ExtendDemo4',
}
</script>

<style scoped lang="less">
/*pre:hover,
.some-class {
  &:extend(div pre);
}

pre:hover:extend(div pre),
.some-class:extend(div pre) {}*/


/*.box,.link{
  &:extend(.red);
}*/
/*2种写法效果一样*/
.box:extend(.red), .link:extend(.red) {

}

.red {
  color: red;
}

</style>
