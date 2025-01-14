<template>
    <header>Title: {{ pizza.title }}</header>
    <div class="pizza--details-wrapper">
        <img :src="pizza.image" :alt="pizza.title" width="300" />
        <p>Description: {{ pizza.description }}</p>
        <div class="pizza--inventory">
            <div class="pizza--inventory-stock">Quantity : {{ pizza.quantity }}</div>
            <div class="pizza--inventory-price">Price : {{ pizza.price }}</div>
        </div>
    </div>
</template>

<script lang="ts">
// class Pizza {
//     title: string;
//     description: string;
//     image: string;
//     quantity: number;
//     price: number;

//     constructor(
//         title: string,
//         description: string,
//         image: string,
//         quantity: number,
//         price: number,
//     ) {
//         this.title=title
//         this.description=description
//         this.image=image
//         this.quantity=quantity
//         this.price=price
//     }
// }

// export default {
//     name: 'PizzaComponent',
//     props: {
//         pizza : {
//             type: Pizza,
//             required: true,
//         }
//     }
// }
import type { PropType } from 'vue'

interface Pizza {
    title: string;
    description: string;
    image: string;
    quantity: number;
    price: number;
}

export default {
    name: 'PizzaComponent',
    props: {
        pizza : {
            type: Object as PropType<Pizza>,
            required: true,
        }
    }
}

</script>