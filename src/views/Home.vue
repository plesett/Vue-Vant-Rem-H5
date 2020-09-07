<template>
  <div class="home">
    你好asda
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
// import { Test } from "../api/test"
export default {
  name: "Home",
  components: {
    [Button.name]: Button,
  },
  mounted() {
    // Test().then(res => {
    //   console.log(res,'<---Test')
    // })
  }
};
</script>
