<template>
  <div class="page-header"><h1>회원정보</h1></div>
  <table class="table">
    <thead>
      <tr>
        <th>id</th>
        <th>이름</th>
        <th>이메일</th>
        <th>상세주소</th>
        <th>우편정보</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <OrderListComponent
    :isAdmin="false"
    apiUrl="http://localhost:8080/member/myorders"
  ></OrderListComponent>
</template>

<script>
import OrderListComponent from "@/components/OrderListComponent.vue";
export default {
  components: {
    OrderListComponent,
  },
};
</script>
