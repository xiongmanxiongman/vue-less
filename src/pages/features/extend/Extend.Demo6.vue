<template>
  <div class="my">
    <PageHeader content="继承与&符号"/>
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
  name: 'ExtendDemo6',
}
</script>

<style scoped lang="less">
/*.bucket {
  tr & {
    color: blue;
  }
}
.some-class:extend(tr .bucket) {}


tr .bucket,
.some-class {
  color: blue;
}*/

.txt {
  .box & {
    color: red;
  }
}

.link:extend(.box .txt) {
}



</style>
