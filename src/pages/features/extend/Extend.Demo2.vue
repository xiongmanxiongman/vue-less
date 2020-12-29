<template>
  <div class="my">
    <PageHeader content="继承写法的演变"/>
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
  name: 'ExtendDemo2',
}
</script>

<style scoped lang="less">
/*.a:extend(.b) {}

// 上面的写法和下面效果一样
.a {
  &:extend(.b);
}

.c:extend(.d all) {

}
.c:extend(.d) {

}

.e:extend(.f) {}
.e:extend(.g) {}

// 继承多个
.e:extend(.f, .g) {}*/


.box:extend(.red, .blue) {
}

.red {
  color: red;
}

.blue {
  background: blue;
}
</style>
