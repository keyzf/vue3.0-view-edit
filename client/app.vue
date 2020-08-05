<template>vue3.0</template>

<script>
import { setup } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log("vue3.0 setup", store.state.active_tab);
  },
};
</script>

<style lang="less" scoped>
</style>
