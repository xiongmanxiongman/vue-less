<template>
  <div class="my">
    <PageHeader content="&符号用法4"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <p>p标签
      <a href="javascript:;">p下的a标签</a>
    </p>
    <a href="javascript:;">a标签
      <p>a下的p标签</p>
      <ul>
        <li>a下的li标签
          <a href="javascript:;">li下的a标签</a>
          <p>li下的p标签</p>
        </li>
      </ul>
    </a>
    <ul>
      <li>li标签</li>
    </ul>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ParentSelectorsDemo6',
}
</script>

<style scoped lang="less">
/*p,
a,
ul,
li {
  border-top: 2px dotted #366;
}
p + p,
p + a,
p + ul,
p + li,
a + p,
a + a,
a + ul,
a + li,
ul + p,
ul + a,
ul + ul,
ul + li,
li + p,
li + a,
li + ul,
li + li {
  border-top: 0;
}*/

p, a, ul, li {
  border-top: 2px dotted #366;

  & + & {
    border-top: 0;
  }
}
</style>
