<template>
  <router-view></router-view>
</template>

<script>
export default {
  created: function() {
    // this.$post("http://localhost:3000/api/user/login?mp=123", {
    //   username: "宁振宇",
    //   card_sn: "211202199302101750",
    //   card_type: 1,
    //   mobile: "17710867821",
    //   password: "123"
    // });
  }
};
</script>

<style lang="less" scoped>
</style>
