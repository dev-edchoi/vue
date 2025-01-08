<template>
    <h2 class="heading">I am a Vue MyFirstComponent</h2>
    <h2 class="heading">{{ message }}</h2>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue';

export default defineComponent({
    name : 'MyFirstComponent',

    data() {
        return {
            message : 'Hello vue',
            reversedMessage : 'Hello vue'.split('').reverse().join('')
        }
    },
    watch: {
        message(newValue: string, oldValue: string){
            console.log(`new value: ${newValue}, old value: ${oldValue}`)
            this.reversedMessage = newValue.split('').reverse().join('')
        }
    }
})
</script>


<style>
.heading {
    font-size: 16px;
}
</style>