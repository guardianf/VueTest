const Mock = require('mockjs');

Mock.setup({
  timeout: '200-600',
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  const { path, target } = item;
  const protocol = path.split('|');
  const url = new RegExp(`^${protocol[1]}`);
  Mock.mock(url, protocol[0], target);
});
