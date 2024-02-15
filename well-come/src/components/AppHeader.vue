<template>
  <v-app-bar>
    <!-- 로고 및 타이틀 영역 -->
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-img src="path/to/logo.png" class="my-2" height="28"></v-img>
    </v-toolbar-title>

    <!-- 네비게이션 메뉴 -->
    <v-spacer></v-spacer>
    <v-btn text v-for="link in links" :key="link.text" :to="link.to">
      {{ link.text }}
    </v-btn>

    <v-menu v-model="menuOpen" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          언어
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="selectItem(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuOpen: false, // 메뉴 열림/닫힘 상태 추가
      links: [
        { text: "PRODUCT", to: "/product" },
        { text: "TAP SPECIAL", to: "/tap-special" },
        // 다른 링크들...
      ],
      items: [
        { title: "KOR" },
        { title: "ENG" },
        // 다른 언어나 통화 옵션들...
      ],
    };
  },
  methods: {
    selectItem(item) {
      // 선택된 언어나 통화 처리를 여기에 추가
      console.log(item);
    },
  },
};
</script>
