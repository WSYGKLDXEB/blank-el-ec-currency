<template>
  <div class="tagNav">
    <el-breadcrumb separator="">
      <el-breadcrumb-item :to="{ path: item.path }" v-for="(item, i) in navData" :key="i"
        ><el-tag closable effect="dark" size="medium" @close="closePage(i)">{{ item.name }}</el-tag></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BlankElEcCurrencyTagNav',
  props: {
    from: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      navData: [
        {
          name: '首页',
          path: '/'
        }
      ]
    }
  },
  mounted() {},
  watch: {
    from(news, old) {
      console.log(news, old)
      const isAdd = this.navData.some((item) => item.name === news.name)
      if (!isAdd) {
        this.navData.push(news)
      }
    }
  },
  methods: {
    closePage(i) {
      console.log(this.navData.length)
      if (this.navData.length <= 1) return this.$message.info('这是我最后的倔强！')
      this.navData.splice(i, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.tagNav {
  margin-top: 15px;
}
.el-tag{
  cursor: pointer;
}
</style>
