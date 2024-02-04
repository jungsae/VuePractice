<template lang="">
  <AppHeader></AppHeader>
  <div>
    <h1>Hello world!</h1>
    <p>light green</p>
  </div>
  <button>Subscribe</button>
</template>
<script>
import AppHeader from "./components/Header.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
<style>
/* 스타일 내용을 추가하세요 */
h1 {
  color: red;
}

.bg-green {
  background-color: lightgreen;
}
</style>
