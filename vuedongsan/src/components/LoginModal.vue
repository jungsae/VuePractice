<template>
  <div class="black-bg" v-if="modalStatus">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="closeModal">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  props: {
    modalStatus: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
