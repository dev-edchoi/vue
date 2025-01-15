<template>
    <div>
        <h1>{{ title }}</h1>
        <h2 class="heading">{{ message }}</h2>
        <input type="text" v-model="message" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref("Hello World")
const title = "My Message Component"
</script>

<!-- <script lang="ts">
import { ref } from 'vue';

export default {
    setup() {
        const message = "Welcome to vue3"

        return {
            message
        }
    }
}
</script> -->