<template>
  <div id="app">
    <el-container style="height: 100vh">
      <el-aside :width="isCollapse ? '64px' : '160px'">
        <el-menu unique-opened router :collapse-transition="false" text-color="#fff" active-text-color="#ffd04b" :default-active="$route.path" background-color="#545c64" :collapse="isCollapse">
          <h3 v-show="!isCollapse">后台管理系统</h3>
          <h3 v-show="isCollapse" class="el-icon-more" style="color: #909399; padding-left: 24px"></h3>
          <!-- 一级菜单 -->
          <el-menu-item :index="item.path" v-for="(item, i) in menuData.slice(0, 3)" :key="i">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ item.label }}</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <i :class="'el-icon-' + menuData[3].icon"></i>
              <span>{{ menuData[3].label }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group v-for="subItem in menuData[3].children" :key="subItem.id">
              <template slot="title">青稞</template>
              <el-menu-item :index="subItem.path">
                <i :class="'el-icon-' + subItem.icon"></i>
                <span>{{ subItem.label }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <el-button plain type="primary" icon="el-icon-menu" size="small" @click="isCollapse = !isCollapse"></el-button>
          </div>
          <el-dropdown trigger="click">
            <span>
              <!-- <el-image style="width: 100px; height: 100px" src="./assets/images/user-default.png" fit="cover"></el-image> -->
              <img style="width: 34px; height: 34px" src="./assets/images/user-default.png" alt="" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <!-- <el-button>54654</el-button> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
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
// @import './assets/css/index.less'
@import './assets/css/blank-px.css';
</style>
