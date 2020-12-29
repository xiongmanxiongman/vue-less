<template>
  <div class="my">
    <PageHeader content="继承的写法7"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <a class="link" href="javascript:;">这是一个a标签</a><br/>
    <a class="link2" href="javascript:;">这是一个a标签2</a>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ExtendDemo7',
}
</script>

<style scoped lang="less">
/*.a.class,
.class.a,
.class > .a {
  color: blue;
}
.test:extend(.class) {}

*.class {
  color: blue;
}
.noStar:extend(.class) {}


*.class {
  color: blue;
}*/
/*上面什么都继承不到*/
/*正确的写法*/
.link:hover {
  color: red;
}

.link2:extend(.link:hover) {
}

/*link:hover:visited {
  color: blue;
}*/
</style>
