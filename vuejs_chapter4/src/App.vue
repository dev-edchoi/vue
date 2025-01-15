<script lang="ts">
import { defineComponent } from 'vue';

//import ChildComponent from './components/ChildComponent.vue';
import ParentComponent from './components/ParentComponent.vue';
// import ProductComp from './components/ProductComp.vue';
import ProductList from './components/ProductList.vue';
import BadPizzaUsage from './components/BadPizzaUsage.vue';
import ToDoList from './components/ToDoList.vue';
import House from './components/House.vue';
import WithModalComponent from './components/WithModalComponent.vue';

export default defineComponent({
  components:{
    ParentComponent,
    // ChildComponent,
    // ProductComp,
    ProductList,
    BadPizzaUsage,
    ToDoList,
    House,
    WithModalComponent,
  }
})
</script>

<template>
  <ParentComponent />
  <!--<ChildComponent/>-->
  <!--<ProductComp />-->
  <ProductList />
  <BadPizzaUsage />
  <ToDoList />
  <section id="sky" />
  <section class="wrapper">
    <House />
  </section>
  <WithModalComponent />
</template>
