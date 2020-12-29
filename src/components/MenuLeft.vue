<template>
  <el-menu
      :router="true"
      :unique-opened="true"
      @select="eventSelectMenu"
      :default-openeds="activeMenu1"
      class="el-menu-left"
      background-color="#545c64">
    <el-submenu v-for="(item) in routesForMenu" :index="item.index" :key="item.index">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group v-for="(citem) in item.children" :key="citem.path">
        <div class="c-item" :class="citem.path==activeMenu2?'on':''" :index="citem.path">
          <router-link :to="citem.path">{{ citem.name }}</router-link>
        </div>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import routesForMenu from '../routesForMenu'

export default {
  name: 'MenuLeft',
  data() {
    return {
      routesForMenu: routesForMenu,
      activeMenu1: [],
      activeMenu2: '/',
    };
  },
  watch: {
    $route(to) {
      let me = this;
      me.activeMenu2 = to.path;
      me.setMenuActive();
      console.log(to.path, 'watch', '1');
    }
  },
  methods: {
    eventSelectMenu(index, path) {
      console.log(index, path);
    },
    setMenuActive() {
      let me = this;
      routesForMenu.forEach(item => {
        item.children.forEach(citem => {
          if (citem.path == me.activeMenu2) {
            me.activeMenu1 = [item.index];
          }
        });
      });
    }
  },
  created() {
    let me = this;
    me.activeMenu2 = this.$route.path;
    me.setMenuActive();
    console.log(this.$route.path, 'created', '2');
  },
}
</script>

<style scoped lang="less">
.el-menu-left {
  flex: 1;

  .el-menu-item {
    color: #fff;
  }

  .c-item {
    a {
      color: #FFF;
      text-decoration: none;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 14px;

      &:hover {
        background: rgb(67, 74, 80);
      }
    }
  }

  .on {
    a {
      color: #ffd04b;
    }
  }

  /deep/ .el-submenu__title {
    color: #fff;
  }

  /deep/ .el-menu-item-group__title {
    padding: 0;
  }
}

</style>
