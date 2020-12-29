<template>
  <div class="my">
    <PageHeader content="属性选择器的继承"/>
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
  name: 'ExtendDemo9',
}
</script>

<style scoped lang="less">
[title=identifier] {
  color: blue;
}

[title='identifier'] {
  color: blue;
}

[title="identifier"] {
  color: blue;
}

.noQuote:extend([title=identifier]) {
}

.singleQuote:extend([title='identifier']) {
}

.doubleQuote:extend([title="identifier"]) {
}

/*[title=identifier],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}

[title='identifier'],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}

[title="identifier"],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}*/
</style>
