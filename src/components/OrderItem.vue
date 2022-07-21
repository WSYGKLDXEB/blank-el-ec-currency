<template>
  <div class="card">
    <div :style="{ background: bgc }">
      <i :class="icon"></i>
    </div>
    <div>
      <h2>￥{{ number }}</h2>
      <p>￥{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlankElEcCurrencyOrderItem',
  props: {
    icon: {
      type: String,
      default: 'el-icon-s-goods'
    },
    title: {
      type: String,
      default: '今日支付订单'
    },
    number: {
      type: [Number, String],
      default: 12345
    },
    bgc: {
      type: String,
      defaule: '#4faef1'
    }
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.card {
  // width: 100%;
  height: 60px;
  // line-height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  div {
    height: 60px;

    &:nth-of-type(1) {
      width: 60px;
      background: #4faef1;
      color: #fff;
      line-height: 60px;
      text-align: center;
      font-size: 30px;
    }
    &:nth-of-type(2) {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      margin-left: 8px;
      h2 {
        font-size: 20px;
        color: #666;
        font-weight: 700;
      }
      p {
        color: #ccc;
        font-size: 12px;
        margin-top: 4px;
      }
    }
  }
}
</style>
