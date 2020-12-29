<template>
  <div class="my">
    <PageHeader content="使用函数的值"/>
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
  name: 'MapsDemo2',
}
</script>

<style scoped lang="less">
#library() {
  .colors() {
    primary: green;
    secondary: blue;
  }
}

#library() {
  .colors() {
    primary: grey;
  }
}

.box {
  background: #library.colors[secondary];

  .txt {
    color: #library.colors[primary];
  }
}

/*.box {
  @colors: #library.colors();
  background: @colors[secondary];
  .txt{
    color: @colors[primary];
  }
}*/
</style>
