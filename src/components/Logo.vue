<template>
  <div class="logo">
    <h1>
      <router-link to="/">LESS</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
.logo{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #545c64;

  h1 {
    font-size: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
