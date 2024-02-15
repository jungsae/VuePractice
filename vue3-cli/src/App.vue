// App.vue
<template>
  <div id="wrapper">
    <div id="floor-plan">
      <button
        style="width: 100px; height: 50px; border-radius: 5px"
        v-for="(table, index) in tables"
        :key="index"
        @click="showTableInfo(table.id)"
      >
        {{ table.name }}
      </button>
    </div>

    <!-- 모달 창 -->
    <div v-if="showModal" id="table-info-modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ selectedTable.name }}</h2>
        <p>{{ selectedTable.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // 테이블 정보
    const tables = ref([
      { id: "table1", name: "테이블 1", info: "테이블 1 정보" },
      // 다른 테이블 정보
    ]);

    // 선택된 테이블 정보
    const selectedTable = ref(null);

    // 모달 표시 여부
    const showModal = ref(false);

    // 테이블 정보 표시 함수
    const showTableInfo = (tableId) => {
      selectedTable.value = tables.value.find((table) => table.id === tableId);
      showModal.value = true;
    };

    // 모달 닫기 함수
    const closeModal = () => {
      selectedTable.value = null;
      showModal.value = false;
    };

    return { tables, selectedTable, showModal, showTableInfo, closeModal };
  },
};
</script>

<style>
body {
  background: url("../src/assets/Untitled.jpg") no-repeat;
  background-size: cover;
}
/* 스타일 시트 */
/* 층 도면 이미지 스타일 */
#floor-plan {
  position: relative;
  top: 59px;
  left: 123px;
}

/* 테이블 버튼 스타일 */
.table-button {
  position: absolute;
  /* 각 테이블 위치 조정 */
  /* 예: top, left 등을 이용하여 각 버튼의 위치 지정 */
}

/* 모달 창 스타일 */
.modal {
  display: none; /* 초기에는 숨겨짐 */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
