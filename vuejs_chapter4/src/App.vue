<script lang="ts">
import { defineComponent } from 'vue';

import ChildComponent from './components/ChildComponent.vue';
import ParentComponent from './components/ParentComponent.vue';
import ProductComp from './components/ProductComp.vue';
import ProductList from './components/ProductList.vue';

export default defineComponent({
  components:{
    ParentComponent,
    // ChildComponent,
    // ProductComp,
    // ProductList
  }
})
</script>

<template>
  <ParentComponent />
  <!--<ChildComponent/>-->
  <!--<ProductComp />-->
  <!--<ProductList />-->
</template>
