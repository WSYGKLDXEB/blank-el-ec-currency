<template>
  <div class="tagNav">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mall' }">活动列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user' }">活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BlankElEcCurrencyTagNav',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.tagNav{
    margin-top: 15px;
}
</style>
