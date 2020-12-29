<template>
  <div class="page-header">
    <h3>{{ content }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    content: String
  },
}
</script>

<style scoped lang="less">
.page-header {
  margin-bottom: 20px;

  h3 {
    margin: 0;
  }
}
</style>
