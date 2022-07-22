<template>
  <div id="app">
    <el-container style="height: 100vh">
      <el-aside ref="aside" :width="isCollapse ? '64px' : '160px'">
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
            <el-menu-item :index="subItem.path" v-for="subItem in menuData[3].children" :key="subItem.id">
              <i :class="'el-icon-' + subItem.icon"></i>
              <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 折叠按钮 -->
        <div class="fold" @click="isCollapse = !isCollapse">
          <i :class="[isCollapse ? 'el-icon-caret-right' : 'el-icon-caret-left']"></i>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div></div>
          <el-dropdown trigger="hover">
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
          <tag-nav :from="fromPath"></tag-nav>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TagNav from '@/components/TagNav.vue'
import { GetMenu } from '@/api/api'
export default {
  name: 'BlankElEcCurrencyApp',

  data() {
    return {
      // asideWidth: '160px',
      // 菜单展开与否
      isCollapse: false,
      menuData: [],
      fromPath: {}
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
      if (this.menuData) {
        let obj
        console.log(to.path.slice(0, -1))
        if (to.path.slice(0, -1) === '/page') {
          obj = this.menuData[3].children.filter((item) => item.path === to.path)[0]
        } else {
          obj = this.menuData.filter((item) => item.path === to.path)[0]
        }

        this.fromPath = {
          name: obj.label,
          path: obj.path
        }
        console.log(this.fromPath)
      }
    }
  },
  created() {
    this.getMenu()
  },
  mounted() {
    this.init()
  },

  methods: {
    async getMenu() {
      const { data: res } = await GetMenu()
      console.log(res)
      this.menuData = res.data
    },
    init() {
      // console.log(this.$refs.aside)
      // document.querySelector('.el-aside').style.overflow = 'none'
    }
  },
  components: {
    TagNav
    // TagNav: 'tag-nav'
  }
}
</script>

<style lang="less">
// @import './assets/css/index.less'
@import './assets/css/blank-px.css';
#app {
  background-color: #eff2f9;
}
.el-aside {
  position: relative;
  overflow: visible !important;
}
.el-submenu {
  overflow: hidden;
}
.el-submenu li {
  padding: 0 0 0 45px !important;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-main {
}
// 折叠按钮
.fold {
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: -14px;
  height: 50px;
  width: 14px;
  line-height: 50px;
  text-align: center;
  color: #545c64;
  background: #fff;
  border-radius: 0 6px 6px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.15);
}
</style>
