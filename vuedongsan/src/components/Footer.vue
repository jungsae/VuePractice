<template>
  <footer class="bg-white shadow-inner mt-12">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="#" alt="Logo" class="h-8 mr-2" />
          <span class="font-bold text-lg">로고</span>
        </div>
        <div class="flex items-center">
          <div class="text-gray-700 mr-6">
            <span>© 2024 photo. 저작ㅇ권</span>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600 hover:text-blue-600"
              >Privacy Policy</a
            >
            <a href="#" class="text-gray-600 hover:text-blue-600"
              >Terms of Service</a
            >
            <a href="#" class="text-gray-600 hover:text-blue-600">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  setup() {
    return {};
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
</style>
