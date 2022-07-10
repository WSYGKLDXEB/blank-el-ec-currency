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
        <el-row :gutter="20" style="margin-top: 15px">
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

        <el-card style="margin-top: 15px">
          <div class="chart_line" ref="chart_line" style="width: 100%; height: 34vh"></div>
        </el-card>
        <div style="margin-top: 15px; display: flex">
          <el-card style="flex: 48%; margin-right: 20px">
            <div class="chart_line" ref="chart_bar" style="width: 100%; height: 29vh"></div>
          </el-card>
          <el-card style="flex: 48%">
            <div class="chart_line" ref="chart_pic" style="width: 100%; height: 29vh"></div>
          </el-card>
        </div>
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
      ],
      chartArr: []
    }
  },

  mounted() {
    this.$nextTick(function () {
      this.init()
    })
  },

  methods: {
    init() {
      this.createLine()
      this.createBar()
      this.createPic()
    },
    createChart(dom, option) {
      const myChart = this.$echarts.init(dom)
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      this.chartArr.push(myChart)
    },
    createLine() {
      const option = {
        backgroundColor: '',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: 0,
          right: '1%',
          top: '15%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.createChart(this.$refs.chart_line, option)
    },
    createBar() {
      const option = {
        backgroundColor: '',
        legend: {},
        tooltip: {},
        grid: {
          left: 0,
          right: 0,
          top: '15%',
          bottom: 0,
          containLabel: true
        },
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
      this.createChart(this.$refs.chart_bar, option)
    },
    createPic() {
      const option = {
        backgroundColor: '',
        legend: {
          show: false,
          top: 'top'
        },
        grid: {},
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: ['14%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
      }
      this.createChart(this.$refs.chart_pic, option)
    }
  }
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
