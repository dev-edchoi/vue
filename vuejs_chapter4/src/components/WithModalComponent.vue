<template>
    <h2>With Modal Component</h2>
    <button @click="openModal = true">Open Modal</button>
    <Modal :open="openModal" title="Hello World" @closeDialog="toggleModal" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Modal from "./Modal.vue";

export default defineComponent({
    name: "WithModalComponent",
    components: {
        Modal,
    },
    data() {
        return {
            openModal: false,
        };
    },
    methods:{
        toggleModal(newValue: boolean){
            this.openModal = newValue;
        },
    },
})
</script>