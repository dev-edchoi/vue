<script lang="ts">
import { defineComponent } from 'vue';
import MyFirstComponent from './components/MyFirstComponent.vue';

export default defineComponent({
  components : {
    MyFirstComponent,
  }
})
</script>
<template>
  <my-first-component/>
  <MyFirstComponent />
</template>