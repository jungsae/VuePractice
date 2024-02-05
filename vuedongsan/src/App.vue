<template>
  <Header>
    <MainHeader></MainHeader>
  </Header>
  <div class="black-bg" v-if="modalStatus == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modalStatus = false">close</button>
    </div>
  </div>

  <div class="menu">
  </div>

  <div v-for="(data, index) in rooms" :key="index">
    <img :src="data.image" class="room-img" />
    <p>제품번호: {{ data.id }}</p>
    <h4 @click="modalStatus = true" style="display: inline-block; border: 1px solid seagreen">
      {{ data.title }}
    </h4>
    <p>가격: {{ data.price }}</p>
    <p>설명: {{ data.content }}</p>
    <button @click="report(index)">장바구니: </button>
    <p>수량: {{ count[index] }}</p>
  </div>
</template>

<script>
import data from "./assets/data";
import MainHeader from "./components/Main-Header.vue";
export default {
  name: "App",
  data() {
    const savedCount = localStorage.getItem("count");
    return {
      rooms: data,
      count: (this.count = savedCount
        ? JSON.parse(savedCount)
        : new Array(data.length).fill(0)),
      tags: ["Home", "Shop", "About"],
      modalStatus: false,
    };
  },
  methods: {
    report(index) {
      this.count[index]++;
      localStorage.setItem("count", JSON.stringify(this.count));
    },
  },
  components: {
    MainHeader
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
  border-radius: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
