export default {
  path: 'get|covid19',
  target: {
    'list|1-20': [{
      'index|+1': 1,
      'contry|1': ['中国'],
      'area|1': '@contry @index',
      'new|1-20': 1,
      'dead|5-20': 1,
      'confirm|5-20': 20,
      'sum|100-200': 1,
    }],
  },
};
