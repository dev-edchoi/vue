<template>
    <slot name="loading" v-if="isLoading">
        <div class="loading-message">Loading...</div>
    </slot>
    <slot :data="data" v-if="data"></slot>
    <slot name="error" :error="error" v-if="error">
        <div class="error">
            <p>Error : {{ error.message }}</p>
        </div>
    </slot>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const data = ref<Object | undefined>();
const error = ref<Error | undefined>();
const isLoading = ref<boolean>(false);

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    method : {
        type: String,
        default: "GET",
    }
});

async function fetchData() {
    try {
        isLoading.value = true;
        const response = await axios(props.url, {
            method: props.method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        data.value = response.data;
    } catch (err: unknown) {
        // unknown 타입 확인 후 Error로 변환
        if (err instanceof Error) {
            error.value = err;
        } else {
            error.value = new Error('An unknown error occurred');
        }
    } finally {
        isLoading.value = false;
    }
}
</script>