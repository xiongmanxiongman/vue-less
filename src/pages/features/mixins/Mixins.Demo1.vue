<template>
  <div class="my">
    <PageHeader content="混入样式1"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a class="link" href="javascript:;">这是一个a标签</a>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'MixinsDemo1',
}
</script>

<style scoped lang="less">
/*.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}*/

/*.a, #b {
  color: red;
}
.mixin-class {
  color: red;
}
.mixin-id {
  color: red;
}*/
.a {
  color: red;
}

#b {
  background: blue;
}

.link {
  .a();
}

.box {
  #b();
}


</style>
