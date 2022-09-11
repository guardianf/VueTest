const { Random } = require('mockjs');

const DateLen = Random.integer(0, 100);

const Dates = Random.range(DateLen).map((index) => [Math.floor(index / 30) + 1, (index % 30) + 1].join('.'));

export default {
  path: 'get|charts/line',
  target: {
    data: [{
      'name|1': ['上海', '广州'],
      trend: {
        list: [{
          name: '确诊',
          data: Random.range(DateLen).map(() => Random.integer(0, 20)),
        }, {
          name: '治愈',
          data: Random.range(DateLen).map(() => Random.integer(0, 20)),
        }, {
          name: '死亡',
          data: Random.range(DateLen).map(() => Random.integer(0, 20)),
        }, {
          name: '新增',
          data: Random.range(DateLen).map(() => Random.integer(0, 20)),
        }],
        updateDate: Dates,
      },
    }],
  },
};
