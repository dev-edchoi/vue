<script lang="ts">
import { defineComponent } from 'vue';
//import MyFirstComponent from './components/MyFirstComponent.vue';
//import MyFirstComponent from './components/MyFirstComponentWithHook.vue';
//import StaticMessage from './components/StaticMessage.vue';
//import ReverseMessage from './components/ReverseMessage.vue';
//import UserWatcherComponent from './components/UserWatcherComponent.vue';
import ListLayout from './components/ListLayout.vue';

export default defineComponent({
 components: {
    //MyFirstComponent,
    //StaticMessage,
    //ReverseMessage,
    //UserWatcherComponent
    ListLayout
}
})
</script>

<template>
  <!-- <my-first-component />
  <MyFirstComponent /> -->
  <!--<StaticMessage /> -->
  <!--<ReverseMessage />-->
  <UserWatcherComponent />
  <ListLayout />
  <!-- <ProductItemList /> -->
  <!-- <DiningComponent /> -->
  <!-- <CafeComponent /> 
  <section class="wrapper">
    <HeadingComponent />
    <span class="heading">This is a span element in App.vue component</span>
  </section>-->
 </template>


