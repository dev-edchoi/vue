<script lang="ts">
import { defineComponent } from 'vue';
//import MyFirstComponent from './components/MyFirstComponent.vue';
//import MyFirstComponent from './components/MyFirstComponentWithHook.vue';
//import StaticMessage from './components/StaticMessage.vue';
//import ReverseMessage from './components/ReverseMessage.vue';
//import UserWatcherComponent from './components/UserWatcherComponent.vue';
//import ListLayout from './components/ListLayout.vue';
//import ProductItemList from './components/ProductItemList.vue';
//import TaskListComponent from './components/TaskListComponent.vue';
//import DiningComponent from './components/DiningComponent.vue';
// import CafeComponent from './components/CafeComponent.vue';
import HeadingComponent from './components/HeadingComponent.vue';

export default defineComponent({
 components: {
    //MyFirstComponent,
    //StaticMessage,
    //ReverseMessage,
    //UserWatcherComponent,
    //ListLayout,
    //ProductItemList,
    //TaskListComponent,
    //DiningComponent,
    // CafeComponent,
    HeadingComponent
}
})
</script>

<template>
  <!-- <my-first-component />
  <MyFirstComponent /> -->
  <!--<StaticMessage /> -->
  <!--<ReverseMessage />-->
  <!--<UserWatcherComponent />-->
  <!--<ListLayout /> -->  
  <!-- <ProductItemList /> -->
  <!--<TaskListComponent />-->
  <!--<DiningComponent />-->
  <!--<CafeComponent /> -->
  
  <section class="wrapper">
    <HeadingComponent />  
    <span class="heading">This is a span element in App.vue component</span>
  </section>
 </template>
<style scoped>
.wrapper :deep(p){
  color: #000;
}
</style>


