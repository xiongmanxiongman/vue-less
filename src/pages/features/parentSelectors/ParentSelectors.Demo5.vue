<template>
  <div class="my">
    <PageHeader content="&符号用法3"/>
    <div class="box">
      <p class="txt">这是一个方块</p>
    </div>
    <div class="no-borderradius">
      <div class="box">
        <p class="txt">这是一个方块</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  name: 'ParentSelectorsDemo5',
}
</script>

<style scoped lang="less">
@images: "../../../assets";
.box {
  border-radius: 15px;

  .no-borderradius & {
    border-radius: 0;
    background-image: url("@{images}/logo.png");
  }
}

/*.box {
  border-radius: 15px;
}
.no-borderradius .box {
  background-image: url('../../../assets/logo.png');
}*/
</style>
