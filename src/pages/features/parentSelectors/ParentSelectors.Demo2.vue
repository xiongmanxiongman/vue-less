<template>
  <div class="my">
    <PageHeader content="选择器名字连接"/>
    <div class="box">
      <p class="txt button-ok">这是一个按钮</p>
      <p class="txt button-cancel">这是一个按钮</p>
      <p class="txt button-custom">这是一个按钮</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ParentSelectorsDemo2',
}
</script>

<style scoped lang="less">
/*.button-ok {
  background-color: #409eff;
}
.button-cancel {
  background-color: #909399;
}
.button-custom {
  background-color: #67c23a;
}*/
.button {
  &-ok {
    background-color: #409eff;
  }

  &-cancel {
    background-color: #909399;
  }

  &-custom {
    background-color: #67c23a;
  }
}

.box {
  p {
    display: flex;
    cursor: pointer;
    color: #fff;
    border-radius: 10px;
  }
}
</style>
