<template>
    <h1>404 - Page not found</h1>
    <p>Path : {{ route.path }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route =useRoute();
</script>