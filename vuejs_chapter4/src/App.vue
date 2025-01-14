<script lang="ts">
import { defineComponent } from 'vue';

//import ChildComponent from './components/ChildComponent.vue';
import ParentComponent from './components/ParentComponent.vue';
// import ProductComp from './components/ProductComp.vue';
//import ProductList from './components/ProductList.vue';
import BadPizzaUsage from './components/BadPizzaUsage.vue';
import ToDoList from './components/ToDoList.vue';

export default defineComponent({
  components:{
    ParentComponent,
    // ChildComponent,
    // ProductComp,
    //ProductList
    BadPizzaUsage,
    ToDoList,
  }
})
</script>

<template>
  <ParentComponent />
  <!--<ChildComponent/>-->
  <!--<ProductComp />-->
  <!--<ProductList />-->
  <BadPizzaUsage />
  <ToDoList />
</template>
