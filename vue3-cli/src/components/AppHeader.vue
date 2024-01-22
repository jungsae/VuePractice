<template>
  <div>
    <h1>{{ appTitle }}</h1>
    <button @click="changeTitle">눌러봐</button>
  </div>
</template>

<script>
export default {
  props: {
    appTitle: String,
  },
  methods: {
    changeTitle() {
      this.$emit("change");
    },
  },
};
</script>

<style scoped></style>
