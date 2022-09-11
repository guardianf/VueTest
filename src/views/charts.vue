<template>
  <div class="about">
    <h1>This is an chart page</h1>
    <div id='pieChart'></div>
    <div id='lineChart'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieData: [],
    }
  },
  mounted() {
    const pieChart = this.$charts.init(document.getElementById('pieChart'));
    this.getData().then((res) => {
      pieChart.setOption({
        series: [{
          type: 'pie',
          roseType: 'angle',
          radius: '85%',
          center: ['50%', '50%'],
          data: res,
          label: {
            position: 'inside',
          },
        }],
      });
    });
    //
    const lineChart = this.$charts.init(document.getElementById('lineChart'));
    this.getCovid('上海').then((res) => {
      console.log(res.data);
      const city = res.data.data[0].trend;
      const cityName = res.data.data[0].name;
      lineChart.setOption({
        title: {
          text: `新冠疫情${cityName}情况`,
        },
        xAxis: {
          type: 'category',
          data: city.updateDate,
        },
        yAxis: {
          type: 'value',
        },
        legend: {
          data: city.list.map(item => item.name),
        },
        tooltip: {
          trigger: 'axis',
        },
        series: [
          {
            type: 'line',
            name: city.list[0].name,
            data: city.list[0].data
          }, {
            type: 'line',
            name: city.list[1].name,
            data: city.list[1].data
          }, {
            type: 'bar',
            name: city.list[2].name,
            data: city.list[2].data
          }, {
            type: 'bar',
            name: city.list[3].name,
            data: city.list[3].data
          }
        ],
        // label: {
        //   position: 'inside',
        // },
      });
    });
  },
  methods: {
    getData() {
      return new Promise((resolved, reject) => {
        this.$axios.get('charts/pie').then((res) => {
          resolved(this.transform(res.data.list));
        });
      });
    },
    transform(data) {
      const ret = [];
      for (var i = 0; i < data.length; i++) {
        const {count, month } = data[i];
        ret.push({
          name: month,
          value: count,
        });
      }
      return ret;
    },
    getCovid(area) {
      const callbackName = 'do';
      const url = `https://voice.baidu.com:443/newpneumonia/getv2?target=trend&isCaseIn=1&from=mola-virus&area=${area}&stage=publish&callback=${callbackName}`;
      return this.$axios({
        type: 'get',
        url: 'charts/line'
      })
    }
  },
}
</script>

<style lang='scss'>
#pieChart {
  width: 200px;
  height: 200px;
}
#lineChart {
  @extend #pieChart;
  width: 1000px;
  height: 400px;
}

</style>
