<template>
  <div class="my">
    <PageHeader content="变量是颜色值"/>
    <a class="link" href="javascript:;">这是一个链接</a>
    <br/>
    <br/>
    <div class="widget box"><p class="txt">这是一个方块</p></div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'VariablesDemo1'
}
</script>

<style scoped lang="less">
/*
a,
.link {
  color: #428bca;
}
.widget {
  color: #fff;
  background: #428bca;
}
*/


// 声明变量
@link-color: #428bca; // sea blue
@link-color-hover: darken(@link-color, 10%);

// 使用
a,
.link {
  color: @link-color;
}

a:hover {
  color: @link-color-hover;
}

.widget {
  color: #fff;
  background: @link-color;
}
</style>
