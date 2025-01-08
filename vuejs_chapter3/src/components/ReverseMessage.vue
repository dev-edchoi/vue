<template>
    <h2 class="heading">I am {{ reverseMessage }}</h2>
    <!--<h2 class="heading">I am {{ reverseMessage(message) }}</h2>-->
    <input v-model="message" type="text" placeholder="Enter your message" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name : 'ReverseMessage',
    data() {
        return {
            message : 'Hello vue',
        };
    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('')
        },
        reverseMessageLength() {
            return this.reverseMessage.length
        }
    }
    /**
    *    
    methods: {        
        reverseMessage(message: string):string {
            return message.split('').reverse().join('')
        },
        /**                  
         * ↓ 스크립트는 상단의 reverseMessage를 나눠어서 만든 메서드 체계이다.        

        reverse(message: string): string[] {
            return message.split('').reverse()
        },
        arrToString(arr: string[]): string {
            return arr.join('')
        },
        reverseMessage(message: string):string {
            return this.arrToString(this.reverse(message))
        },        
    },
    */  
})
</script>