<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card" style="height: 24vh">
          <div slot="header" class="clearfix" style="display: flex; justify-content: flex-start; align-items: center">
            <img src="../assets/images/user.png" alt="" style="width: 100px; height: 100px; border-radius: 50%; margin-right: 24px" />
            <div>
              <h2 style="font-weight: 700; font-size: 18px">空白</h2>
              <p style="color: #ccc; font-size: 12px; margin-top: 6px">超级管理员</p>
            </div>
          </div>
          <div style="color: #aaa; font-size: 14px">
            <div>上次登录时间：<span>&nbsp;&nbsp;&nbsp;2021-7-11</span></div>
            <div style="margin-top: 4px">上次登录地点：<span>&nbsp;&nbsp;&nbsp;南昌</span></div>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 15px; height: 64vh">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="100"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="card">
              <div style="">
                <i class="el-icon-success"></i>
              </div>
              <div>
                <h2>￥1234</h2>
                <p>￥今日支付订单</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="card">
              <div style="background: #ffbc7d">
                <i class="el-icon-star-on"></i>
              </div>
              <div>
                <h2>￥1234</h2>
                <p>￥今日支付订单</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="card">
              <div style="background: #4faef1">
                <i class="el-icon-s-goods"></i>
              </div>
              <div>
                <h2>￥1234</h2>
                <p>￥今日支付订单</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top:15px">
          <el-col :span="8">
            <div class="card">
              <div style="">
                <i class="el-icon-success"></i>
              </div>
              <div>
                <h2>￥1234</h2>
                <p>￥今日支付订单</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="card">
              <div style="background: #ffbc7d">
                <i class="el-icon-star-on"></i>
              </div>
              <div>
                <h2>￥1234</h2>
                <p>￥今日支付订单</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="card">
              <div style="background: #4faef1">
                <i class="el-icon-s-goods"></i>
              </div>
              <div>
                <h2>￥1234</h2>
                <p>￥今日支付订单</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BlankElEcCurrencyHome',

  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.home {
  margin-top: 15px;
  // justify-content: ;
}
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
      background: #21b8cc;
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
