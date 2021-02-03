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
      console.log(res);
      // lineChart.setOption({
      //   series: [{
      //     type: 'line',
      //     roseType: 'angle',
      //     radius: '85%',
      //     center: ['50%', '50%'],
      //     data: res,
      //     label: {
      //       position: 'inside',
      //     },
      //   }],
      // });
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
      const callbackName = '';
      const url = `https://voice.baidu.com/newpneumonia/getv2?target=trend&isCaseIn=1&from=mola-virus&area=${encodeURI(area)}&stage=publish&callback=${callbackName}`;
      return this.$axios({
        type: 'get',
        headers: {
          'Access-Control-Allow-Origin': 'www.baidu.com',
        }
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
  @extend #pieChart
}

</style>
