<template>
  <div class="home">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="6">
        <!-- 账号信息 -->
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
        <!-- 表格 -->
        <el-card class="box-card" style="margin-top: 15px; height: calc(76vh - 140px);">
          <el-table :data="homeData.tableData" style="width: 100%">
            <el-table-column prop="name" label="品牌"> </el-table-column>
            <el-table-column prop="todayBuy" label="日购买量"> </el-table-column>
            <el-table-column prop="monthBuy" label="月购买量"> </el-table-column>
            <el-table-column prop="totalBuy" label="总购买量"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="18">
        <!-- 订单 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <order-item bgc="#21b8cc" icon="el-icon-success"></order-item>
          </el-col>
          <el-col :span="8">
            <order-item bgc="#ffbc7d" icon="el-icon-star-on"></order-item>
          </el-col>
          <el-col :span="8">
            <order-item></order-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 15px">
          <el-col :span="8">
            <order-item bgc="#21b8cc" icon="el-icon-success"></order-item>
          </el-col>
          <el-col :span="8">
            <order-item bgc="#ffbc7d" icon="el-icon-star-on"></order-item>
          </el-col>
          <el-col :span="8">
            <order-item></order-item>
          </el-col>
        </el-row>
        <!-- 折线 -->
        <el-card style="margin-top: 15px">
          <div class="chart_line" ref="chart_line" style="width: 100%; height: 32vh"></div>
        </el-card>
        <div style="margin-top: 15px; display: flex">
          <!-- 柱形图 -->
          <el-card style="flex: 48%; margin-right: 20px">
            <div class="chart_line" ref="chart_bar" style="width: 100%; height: calc(68vh - 375px);"></div>
          </el-card>
          <!-- 饼图 -->
          <el-card style="flex: 48%">
            <div class="chart_line" ref="chart_pic" style="width: 100%; height: calc(68vh - 375px);"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem.vue'
import { GetData } from '../api/api.js'
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
      chartArr: [],
      homeData: [],
      orderSeries: [],
      barSeries: {
        x: [],
        new: [],
        active: []
      }
    }
  },

  mounted() {
    this.$nextTick(function () {
      // this.init()
    })
  },
  created() {
    this.getData()
  },
  methods: {
    init() {
      this.createLine()
      this.createBar()
      this.createPic()
    },
    async getData() {
      const { data: res } = await GetData()
      console.log(res)
      if (res.code !== 20000) return this.$message.error('获取数据失败！')
      this.$message.success('获取数据成功！')
      this.homeData = res.data
      // console.log(res.data.orderData[0])
      const lineArray = Object.keys(res.data.orderData.data[0])
      this.barSeries.x = res.data.userData.map((item) => item.date)
      this.barSeries.new = res.data.userData.map((item) => item.new)
      this.barSeries.active = res.data.userData.map((item) => item.active)
      // console.log(barArray)
      lineArray.forEach((item) => {
        this.orderSeries.push({
          name: item,
          data: res.data.orderData.data.map((items) => items[item]),
          type: 'line'
        })
      })
      this.init()
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
          // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
          data: this.homeData.orderData.date
        },
        yAxis: {
          type: 'value'
        },
        series: this.orderSeries
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
        // dataset: {
        //   source: [
        //     ['product', '2015', '2016', '2017'],
        //     ['Matcha Latte', 43.3, 85.8, 93.7],
        //     ['Milk Tea', 83.1, 73.4, 55.1],
        //     ['Cheese Cocoa', 86.4, 65.2, 82.5],
        //     ['Walnut Brownie', 72.4, 53.9, 39.1]
        //   ]
        // },
        xAxis: { type: 'category', data: this.barSeries.x },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar', data: this.barSeries.new, name: '新增用户' },
          { type: 'bar', data: this.barSeries.active, name: '活跃用户' }
        ]
      }
      this.createChart(this.$refs.chart_bar, option)
    },
    createPic() {
      const option = {
        backgroundColor: '',
        legend: {
          show: true,
          bottom: ''
        },
        grid: {},
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: ['20%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: this.homeData.videoData
          }
        ]
      }
      this.createChart(this.$refs.chart_pic, option)
    }
  },

  components: {
    OrderItem
  }
}
</script>

<style lang="less" scoped>
.home {
  margin-top: 15px;
  // justify-content: ;
  // height: 50vh;
}
</style>
