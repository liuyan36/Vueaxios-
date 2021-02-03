<template>
  <div class="aaa">
    <div>sdasdas</div>
    <button @click="getByMineHandle">调用自己封装的请求体</button>
    <div v-for="(item, index) in aaa" :key="index">{{item.videoName}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: []
    }
  },
  created() {
    this.getByMineHandle()
  },

  methods: {
    getByMineHandle() {
      this.$api.personal.logon().then((res) => {
        console.log(res);
        this.aaa = res.data.list
      });
    },
  },
};
</script>