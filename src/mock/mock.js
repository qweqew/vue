import Mock from 'mockjs';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
 Mock.setup({
    timeout: '200 - 400'
});

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/eventList','get',require('./json/events'))