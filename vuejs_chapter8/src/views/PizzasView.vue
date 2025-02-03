<template>
    <input v-model="search" placeholder="Search for a pizza" />
    <div class="pizzas-view--container">
        <h1>Pizzas</h1>
        <ul>
            <li v-for="pizza in searchResults" :key="pizza.id">
                <PizzaCard :pizza="pizza" />
            </li>
        </ul>        
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import PizzaCard from '@/components/PizzaCard.vue';
import { usePizzas } from '@/composables/usePizzas';
import { useSearch } from '@/composables/useSearch';
import type { Pizza } from '@/types/Pizza';
import { type Ref, watch } from 'vue';

const props = defineProps({
    searchTerms: {
        type: String,
        required: false,
        default: "",
    }
})

const route = useRoute();
const router = useRouter();
const { pizzas } = usePizzas();

type PizzaSearch = {
    search: Ref<string>;
    searchResults: Ref<Pizza[]>;
}

const {search, searchResults}: PizzaSearch = useSearch({
    items: pizzas,
    //defaultSearch: route.query?.search as string,
    defaultSearch: props.searchTerms,
});

watch(search, (value, prevValue) => {
    if(value === prevValue) return;
    router.replace({query: {search: value }});
});

</script>