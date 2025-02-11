<template>
  <header>
    <div>Pizza House</div>
    <Cart />
  </header>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Cart from "./components/Cart.vue";
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  /* 선택 사항 */
}

/* ✅ NavBar를 다음 줄로 배치 */
NavBar {
  display: block;
  /* 기본적으로 block 요소이지만 명확하게 지정 */
  width: 100%;
  margin-top: 10px;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>