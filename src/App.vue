<template>
  <div id="app" class="x-main">
    <!--mian左边:开始-->
    <div class="x-main-left">
      <!--logo:开始-->
      <div class="x-logo">
        <Logo/>
      </div>
      <!--logo:结束-->
      <!--左侧菜单:开始-->
      <div class="x-menu-left">
        <MenuLeft/>
      </div>
      <!--左侧菜单:开始-->
    </div>
    <!--mian左边:结束-->
    <!--mian右边:开始-->
    <div class="x-main-right">
      <!--顶部菜单:开始-->
      <div class="x-nav">
        <Nav/>
      </div>
      <!--顶部菜单:结束-->
      <!--内容区:开始-->
      <div class="x-content-area">
        <ContentArea/>
      </div>
      <!--内容区:开始-->
    </div>
    <!--mian右边:结束-->
  </div>
</template>
<script src="./App.js"></script>
<style lang="less" src="./App.less"></style>
