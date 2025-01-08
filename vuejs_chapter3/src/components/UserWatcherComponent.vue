<template>
    <div>
        <div>
            <label for="name">Name:
                <input v-model="user.name" placeholder="Enter your name" id="name" />
            </label>
        </div>
        <div>
            <label for="age">Name:
                <input v-model="user.age" placeholder="Enter your age" id="age" />
            </label>
        </div>
    </div>
</template>

<script lang="ts">
/** 
 * watcher에서 특정 변화만 감지 가능
     * ex) user.address.street.
     * 
 * this.$watch 파라미터
 * 
 * 관찰 대상 데이터의 이름을 나타내는 문자열.
 * 대상 데이터의 값이 변경될 때 실행할 와처의 핸들러 콜백 함수.
 * 
*/
import { defineComponent } from 'vue';
import type { WatchStopHandle } from 'vue';

type User = {
    name: string;
    age: number;    
    address : {
        street: string;
        city: string;
        country: string;
        zip: string;
    };     
}

export default defineComponent({
    name: 'UserWatcherComponent',

    data(): { user: User; stopWatchingAddressCity?: WatchStopHandle } {
        return {
            user: {
                name: "John",
                age: 30,
                address: {
                    street: "123 Main St",
                    city: "New York",
                    country: "USA",
                    zip: "10001",
                },
            },
            stopWatchingAddressCity: undefined,
        };
    },
    created() {
        if(this.user.address){
            this.stopWatchingAddressCity = this.$watch(
                "user.address.city",
                (newValue: string, oldValue: string) => {
                    console.log({newValue, oldValue})
                }
            );
        }
    },
    beforeUnmount() {
        if(this.stopWatchingAddressCity) {
            this.stopWatchingAddressCity();
        }
    },
    watch: {
        'user.name': {
            handler(newValue: User, oldValue: User) {
                console.log({newValue, oldValue})
            },
            deep: true
        }
    }
})

</script>