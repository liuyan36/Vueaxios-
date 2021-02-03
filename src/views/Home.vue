<template>
  <div class="home">
    <button @click="getHandle">发送get请求</button>
    <button @click="postHandle">发送post请求</button>
    <button @click="getByMineHandle">调用封装的get请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { get } from "../utils/request";

export default {
  name: "Home",

  methods: {
    //axios.get 发起get请求
    //参数一表示请求地址
    //参数二表示配置信息
    //具体可见： http://www.axios-js.com/zh-cn/docs/
    //params  表示传递到服务器端的数据，已url参数的形式拼接在请求地址后面
    //{page:1,per:3}
    // 比如:http://jsonplaceholder.typicode.com/
    //最终生成：http://jsonplaceholder.typicode.com/?page=1&per=3
    // 其中?表示可选参数
    //headers  表示请求头
    getHandle() {
      axios
        .get(
          "http://api-dev.iorange99.com/orange/v1/app/config/type/list/home",
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Accept-Encoding": "gzip, deflate",
              "Accept-Language": "zh-CN,zh;q=0.9",
              Connection: "keep-alive",
              Host: "api-dev.iorange99.com",
              Origin: "http://localhost:8089",
              Referer: "http://localhost:8089/",
              "User-Agent":
                "ssMozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
            },
          }
        )
        .then((res) => console.log(res));
    },
    postHandle() {
      //post请求传递三个参数
      //请求地址
      //请求数据，请求配置，
      //axios默认发送的数据是json格式的
      //配置信息
      //headers
      //content-type:'application/json' 默认
      axios
        .post(
          "http://open.qunar.com/",
          {
            userName: "xiaoming",
            password: "112132",
          },
          {}
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    getByMineHandle() {
      get("abc", { page: 3, per: 2 }).then((res) => console.log(res));
    },
  },
};
</script>
