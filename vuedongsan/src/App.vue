<template>
  <Header></Header>

  <div v-for="(data, index) in rooms" :key="index">
    <img :src="data.image" class="room-img" />
    <p>제품번호: {{ data.id }}</p>
    <h4>
      {{ data.title }}
    </h4>
    <p>가격: {{ data.price }}</p>
    <p>설명: {{ data.content }}</p>
    <p>누적신고: {{ count[index] }}</p>
  </div>

  <Footer></Footer>
</template>
<script>
import data from "./assets/data";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    const savedCount = localStorage.getItem("count");
    return {
      rooms: data,
      count: (this.count = savedCount
        ? JSON.parse(savedCount)
        : new Array(data.length).fill(0)),
    };
  },
  methods: {
    report(index) {
      this.count[index]++;
      localStorage.setItem("count", JSON.stringify(this.count));
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
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
</style>
