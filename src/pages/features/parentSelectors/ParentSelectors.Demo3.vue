<template>
  <div class="my">
    <PageHeader content="&符号用法1"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a class="link" href="javascript:;">green</a>
    <a class="link" href="javascript:;">red</a>
    <a class="link link" href="javascript:;">blue</a>
    <a class="linkish" href="javascript:;">cyan</a>

  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ParentSelectorsDemo3',
}
</script>

<style scoped lang="less">
/*element+element	div+p	选择紧接在 <div> 元素之后的所有 <p> 元素。*/
/*.link + .link {
  color: red;
}
.link .link {
  color: green;
}
.link.link {
  color: blue;
}
.link, .linkish {
  color: cyan;
}*/
.link {
  & + & {
    color: red;
  }

  & & {
    color: green;
  }

  && {
    color: blue;
  }

  &, &ish {
    color: cyan;
  }
}

a {
  display: flex;
}
</style>
