<template>
  <AppHeader :appTitle="msg" v-on:update="changeMessage"></AppHeader>
  <AppHeader :appTitle="msg" v-on:update="changeMessage"></AppHeader>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      msg: "앱 헤더 컴포넌트",
    };
  },
  methods: {
    changeMessage() {
      this.msg = "변경됨";
    },
  },
};
</script>

<style scoped></style>
