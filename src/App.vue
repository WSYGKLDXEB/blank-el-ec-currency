<template>
  <el-container style="height: 100vh">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <el-menu unique-opened router :default-active="$router.path" background-color="#545c65" :collapse="isCollapse">
        <!-- 一级菜单 -->
        <el-submenu :index="item.path" v-for="(item, i) in menuData" :key="i">
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.id">
            <template slot="title">
              <i :class="'el-icon-' + item.icon"></i>
              <span>{{ subItem.label }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-button>54654</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { GetMenu } from '@/api/api'
export default {
  name: 'BlankElEcCurrencyApp',

  data() {
    return {
      // asideWidth: '160px',
      // 菜单展开与否
      isCollapse: false,
      menuData: []
    }
  },
  created() {
    this.getMenu()
  },
  mounted() {},

  methods: {
    async getMenu() {
      const { data: res } = await GetMenu()
      console.log(res)
      this.menuData = res.data
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #333;
}
.el-aside {
  background-color: #545c65;
  height: 100vh;
  // overflow-y: auto;
  // overflow-x: hidden;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  .el-menu {
    border-right: 0;
  }
}
.el-main {
  padding-top: 0;
}
</style>
