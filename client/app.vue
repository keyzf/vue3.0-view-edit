<template>
  <router-view></router-view>
</template>

<script>
import { setup } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    console.log("vue3.0 setup", store.state.active_tab, route.path);
  },
};
</script>

<style lang="less" scoped>
</style>
