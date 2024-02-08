<!-- <template>
  <div class="container">
    <div class="page-header">
      <h1 style="text-align: center">상품목록</h1>
    </div>
    <div>
      <input
        v-model="input"
        type="text"
        placeholder="검색"
        style="text-align: left"
      />
      <button @click="search" style="text-align: right">검색</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>제품사진</th>
          <th>제품명</th>
          <th>수량</th>
          <th>재고수량</th>
          <th>주문수량</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemList" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td><input type="checkbox" /></td>
          <td>
            <img
              :src="getImage(item.id)"
              alt="이미지 준비중"
              style="height: 100px; width: auto"
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stockQuantity }}</td>
          <td><input type="number" style="width: 2.5rem" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      input: "",
      imagePath: "",
      itemList: {},
      pageSize: 10,
      currentPage: 0,
      category: "",
      name: "",
    };
  },
  async created() {
    await this.search();
  },
  methods: {
    async search() {
      try {
        const params = {
          page: this.currentPage,
          size: this.pageSize,
          name: this.input,
          cate: this.category,
        };

        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}/items`,
          { params }
        );
        this.itemList = response.data;
        console.log(this.itemList);
      } catch (e) {
        console.error("에러:", e.message);
      }
    },
    getImage(itemId) {
      return `${process.env.VUE_APP_API_BASE_URL}/item/${itemId}/image`;
    },
  },
};
</script>

<style lang="scss" scoped></style> -->
<template>
  <div class="container">
    <div class="page-header">
      <h1 style="text-align: center">상품목록</h1>
    </div>
    <div class="justify-content=between" style="margin-top: 20px">
      <form @submit.prevent="loadItems">
        <select
          v-model="searchType"
          class="form-control"
          style="display: inline-block; width: auto; margin-right: 5px"
        >
          <option value="optional" selected>선택</option>
          <option value="name">상품명</option>
          <option value="category">카테고리</option>
        </select>
        <input v-model="searchValue" type="text" />
        <button class="submit" @click.prevent="searchItems">검색</button>
      </form>
      <div style="text-align: right">
        <button @click="addCart" class="btn btn-secondary">장바구니</button>
        <button @click="placeOrder" class="btn btn-success">주문하기</button>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>제품사진</th>
          <th>제품명</th>
          <th>수량</th>
          <th>재고수량</th>
          <th>주문수량</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itemList" :key="item.id">
          <td><input type="checkbox" v-model="selectedItems[item.id]" /></td>
          <td>
            <img
              :src="getImage(item.id)"
              alt="이미지 준비중"
              style="height: 100px; width: auto"
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stockQuantity }}</td>
          <td>
            <input
              v-model="item.quantity"
              type="number"
              min="1"
              style="width: 2.5rem"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedItems: {},
      itemList: [],
      pageSize: 10,
      currentPage: 0,
      searchType: "name",
      searchValue: "",
      isLastPage: false,
      isLoading: false,
    };
  },
  created() {
    this.loadItems();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollPagenation);
  },
  methods: {
    placeOrder() {
      const orderItems = Object.keys(this.selectedItems)
        .filter((key) => this.selectedItems[key] === true)
        .map((key) => {
          const item = this.itemList.find((item) => item.id == key);
          return {
            itemId: item.id,
            count: item.quantity,
          };
        });
      console.log({ orderReqItemDto: [orderItems] });
    },
    scrollPagenation() {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;
      if (nearBottom && !this.isLastPage && !this.isLoading) {
        this.currentPage += 1;
        this.loadItems();
      }
    },
    searchItems() {
      (this.itemList = []),
        (this.currentPage = 0),
        this.loadItems(),
        (this.isLastPage = false);
    },
    async loadItems() {
      try {
        this.isLoading = true;
        const params = {
          page: this.currentPage,
          size: this.pageSize,
          // [this.searchType]: this.searchValue,
        };
        if (this.searchType === "name") {
          params.name = this.searchValue;
        } else if (this.searchType === "category") {
          params.category = this.searchValue;
        }

        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}/items`,
          { params }
        );
        const addItemList = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        if (addItemList.length < this.pageSize) {
          this.isLastPage = true;
        }
        // this.itemList += addItemList;
        this.itemList = [...this.itemList, ...addItemList];
      } catch (e) {
        console.error("에러:", e.message);
      }
      this.isLoading = false;
    },
    getImage(itemId) {
      return `${process.env.VUE_APP_API_BASE_URL}/item/${itemId}/image`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
