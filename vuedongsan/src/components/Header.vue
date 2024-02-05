<template>
  <header
    class="bg-white fixed top-0 w-full"
    :class="{ 'h-20': isFixed, 'h-20': !isFixed }"
  >
    <nav
      class="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center"
    >
      <div class="flex items-center">
        <img src="../assets/spin.gif" alt="Logo" class="h-10 mr-2" />
        <span class="font-bold text-lg">조 이름 추천</span>
        <img src="../assets/spin.gif" alt="Logo" class="h-10 mr-2" />
      </div>
      <div class="md:hidden">
        <button @click="toggle" class="text-gray-700 focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="hidden md:flex space-x-6">
        <a href="/" class="text-gray-600 hover:text-blue-600">메인으로</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">디자인</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">추천</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">ㄱㄱ</a>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <button
          class="px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
        >
          로그인
        </button>
        <button
          class="px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
        >
          회원가입
        </button>
      </div>
      <transition
        name="dropdown"
        enter-active-class="transition ease-out duration-300"
        leave-active-class="transition ease-in duration-300"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-show="isOpen"
          class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50"
        >
          <div class="px-6 py-3 space-y-3">
            <a href="/" class="block text-gray-600 hover:text-blue-600"
              >메인으로</a
            >
            <a href="#" class="block text-gray-600 hover:text-blue-600"
              >디자인</a
            >
            <a href="#" class="block text-gray-600 hover:text-blue-600">추천</a>
            <a href="#" class="block text-gray-600 hover:text-blue-600">ㄱㄱ</a>
            <button
              class="w-full px-4 py-2 border rounded text-blue-500 border-blue-300 hover:bg-blue-400 hover:text-white transition-colors"
            >
              로그인
            </button>
            <button
              class="w-full px-4 py-2 border rounded text-blue-500 border-blue-300 hover:bg-blue-400 hover:text-white transition-colors"
            >
              회원가입
            </button>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "HeaderComponent",
  setup() {
    const isOpen = ref(false);
    const isFixed = ref(false);

    function toggle() {
      isOpen.value = !isOpen.value;
    }

    function handleScroll() {
      if (window.scrollY > 0) {
        isFixed.value = true;
      } else {
        isFixed.value = false;
      }
    }

    // 컴포넌트가 마운트되면 스크롤 이벤트를 추가하고,
    // 언마운트될 때 이벤트를 제거합니다.
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isOpen,
      toggle,
      isFixed,
    };
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
