<template>
  <div class="demo">
    <img src="../assets/logo.png" ref="img" />
    <h1>Hello {{text}}!</h1>
    <button @click="inc">readonly:{{ readonly_count }}; count:{{count}}</button>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  reactive,
  computed,
  readonly,
  watchEffect,
  watch,
} from "vue";
// https://vue-composition-api-rfc.netlify.app/api.html
export default {
  setup() {
    // 两种响应式 data
    const state = reactive({
      name: "zhangsan",
      age: 10,
    });
    let count = ref(0);
    // methods
    const inc = () => {
      count.value++;
      // warning
      // readonly_count.value++;
    };
    // watch

    // 如果要监听 state.age 不要 watch state.age
    // watch(state, ()=>{
    //   console.log('state change')
    // });
    // 或者这样写
    watch(
      () => state.name,
      () => {
        console.log("state.age change");
      }
    );
    watch(count, () => {
      console.log("count change");
    });

    // 不太清楚这个和 watch 的差别
    // 感觉像是一个 useEffect 的东西
    watchEffect(() => console.log("watch effect：", count.value));

    // readonly
    // readonly 本身不可改，会随着 count 改变
    const readonly_count = readonly(count);

    // 计算属性
    const text = computed(() => `${state.name}さん`);

    // ref
    const img = ref(null);

    // 生命周期
    onMounted(() => {
      // 好像不需要 nextTick 了
      console.log("mounted", img, img.value);
    });

    return {
      img,
      text,
      readonly_count,
      state,
      count,
      inc,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
