// axios实例封装方法
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = "";
// 根据环境变量,区分接口默认地址,配置环境变量,例如开发生产测试等环境
// switch (process.env.NODE_ENV) {
//     // 请求线上地址
//     case "production":
//         axios.defaults.baseURL = "";
//         break;
//     // 请求测试环境地址，可自定义
//     case "test":
//         axios.defaults.baseURL = "";
//         break;
//     // 默认开发环境地址，
//     default:
//         axios.defaults.baseURL = "";
// }

// 设置超时时间 和 跨域 是否允许携带凭证
axios.defaults.timeout = 10000 // 超时时间

axios.defaults.withCredentials = true // 跨域

// 设置请求传递数据格式 x-www-from-urlencoded（看服务器要求的是这种格式）
axios.defaults.headers['Content-Type'] = 'application/x-www-from-urlencoded';
// 设置post 请求 qs.stringify(data)是将请求格式变成 xxx=xxx&xxx=xxx格式   qs 是第三方库
axios.defaults.transformRequest = data => qs.stringify(data);


// 开始加入请求拦截器，发送请求时的操作
// 客户端发送请求 -> [请求拦截器] -> 服务器
// token 校验(JWT) : 接收服务器返回的token， 存储到vuex/存储到本地，然后每一次发送请求都要把token带上，否则服务器认为这是非法请求
axios.interceptors.request.use(config => {
    // 携带token
    let token = localStorage.getItem('token'); // 存储到本地
    token && (config.headers.Authorization = token); // 

    return config; // 必须的返回config,否则的话在发给服务器的时候是空的
}, error => {
    return Promise.reject(error);
})

// 响应拦截器  服务器返回信息->  [拦截的统一处理]  -> 客户端js获取到信息
// axios.defaults.validateStatus = status => {  // 自定义响应成功的HTTP状态码
//     return /^(2|3)\d{2}$/.test(status)  // 2或者3都叫成功
// }

axios.interceptors.response.use(response => {
    return response.data;
}, error => {
    let { response } = error;
    if (response) { // 如果response存在，服务器最起码返回结果
        switch (response.status) { //这一块根据服务器来进行判断编写的
            case 401:  // 权限  当前请求需要用户登录（一般叫做未登录）
                break;
            case 403:  // 服务器拒绝执行， （一般是token过期）
                // localStorage.getItem
                break;
            case 404:   // 找不到页面存在
                break;
        }
    } else { // 服务器连结果都没有返回，这里只有服务器崩了或者断网问题
        if (!window.navigator.onLine) {
            // 断网处理： 可以跳转断网页面
            return;
        }

        return Promise.reject(error)
    }
})


export default axios;

// let params = {
//     list: aaa
// }

// axios.get(params).then(result => { // 只有响应主体的内容了

// })

// axios.get(url, {
//     params: {

//     },
//     headers: {

//     }
// }).then(response => {

// }).catch(error => {

// });

