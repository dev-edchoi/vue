<script lang="ts">
import { defineComponent } from 'vue';
import MyMessageComponent from './components/MyMessageComponent.vue';

export default defineComponent({
  components: {
    MyMessageComponent,
  }  
})
</script>

<template>
  <MyMessageComponent />
</template>


