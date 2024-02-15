<template>
  <v-app>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card :loading="loading" class="mx-auto" max-width="374px">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          cover
          height="250px"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>
            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <div class="ms-4">4.5 (413)</div>
          </v-row>
          <div class="my-4">$ • Italian, Cafe</div>
          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>

          <!-- flatpickr 날짜 선택 -->
          <input
            type="text"
            id="datepicker"
            class="input"
            placeholder="날짜를 선택해주세요"
          />
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
          <v-chip-group v-model="selectedTime" column>
            <v-chip
              v-for="time in availableTimes"
              :key="time"
              :value="time"
              @click="selectTime(time)"
              :color="
                selectedTime === time
                  ? 'deep-purple accent-4'
                  : 'blue-grey lighten-4'
              "
              text-color="white"
            >
              {{ formatTime(time) }}
            </v-chip>
          </v-chip-group>
        </div>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve"
            >예약하기</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 예약 성공 메시지 -->
    <v-snackbar v-model="showSnackbar" timeout="3000">
      {{ successMessage }}
      <v-btn color="red" text @click="showSnackbar = false">닫기</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
// import axios from "axios"; // axios 라이브러리 import
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css"; // Import flatpickr styles

export default {
  data() {
    return {
      dialog: true,
      selectedDate: "",
      selectedTime: null,
      availableTimes: [],
      loading: false,
      successMessage: "",
      showSnackbar: false,
    };
  },
  mounted() {
    this.initDatePicker();
  },

  methods: {
    initDatePicker() {
      flatpickr("#datepicker", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        onChange: (selectedDates, dateStr, instance) => {
          // 선택된 날짜 로깅
          console.log(selectedDates, dateStr, instance);

          // 선택된 날짜를 ISO 문자열로 변환하여 저장
          if (selectedDates.length > 0) {
            const selectedDate = selectedDates[0].toISOString().substr(0, 10);
            this.selectedDate = selectedDate;
            this.fetchAvailableTimes(selectedDates);
          }
        },
      });
    },
    formatTime(isoString) {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    },
    selectTime(time) {
      this.selectedTime = time; // 선택된 시간을 selectedTime에 할당
    },
    async fetchAvailableTimes(selectedDates) {
      console.log(selectedDates);
      const date = selectedDates[0];
      this.selectedDate = date.toISOString().substr(0, 10);

      // 가짜 목 데이터로 예약 가능한 시간 설정
      this.availableTimes = [
        "2024-02-16T17:30:00",
        "2024-02-16T19:30:00",
        "2024-02-16T20:00:00",
        "2024-02-16T21:00:00",
        "2024-02-16T22:00:00",
        "2024-02-16T23:00:00",
      ];

      // 로딩 상태 업데이트
      this.loading = false;
    },

    // async fetchAvailableTimes(selectedDates) {
    //   const date = selectedDates[0];
    //   this.selectedDate = date.toISOString().substr(0, 10);
    //   // API 요청을 통해 선택된 날짜에 대한 예약 가능한 시간 데이터를 가져옵니다.
    //   try {
    //     this.loading = true;
    //     const response = await axios.get(
    //       `YOUR_API_ENDPOINT/available-times?date=${this.selectedDate}`
    //     );
    //     // 예약 가능한 시간 데이터를 업데이트합니다.
    //     this.availableTimes = response.data;
    //     this.loading = false;
    //   } catch (error) {
    //     console.error("Available times fetching error:", error);
    //     this.loading = false;
    //   }
    // },
    reserve() {
      if (!this.selectedDate || !this.selectedTime) {
        alert("날짜와 시간을 모두 선택해주세요.");
        return;
      }
      this.loading = true;
      // 실제 예약 로직 구현, 예를 들어 서버로 예약 정보를 보내는 API 호출
      setTimeout(() => {
        this.loading = false;
        this.successMessage = `예약이 완료되었습니다: ${this.selectedDate} ${this.selectedTime}`;
        this.showSnackbar = true;
        this.dialog = false; // 예약 성공 후 다이얼로그 닫기
        // 예약 성공 후 상태 초기화
        this.selectedDate = "";
        this.selectedTime = null;
        this.availableTimes = [];
      }, 2000);
    },

    close() {
      this.dialog = false;
    },
  },
};
</script>

<style>
/* flatpickr 커스텀 스타일 */
.input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
}
.selected-time-chip {
  background-color: #1976d2 !important; /* 예시 색상, 원하는 색상 코드로 변경하세요 */
  color: white !important;
}
</style>
