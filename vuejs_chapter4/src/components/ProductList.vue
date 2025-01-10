<template>
    <ProductComp :name="product.name" :price="product.price" />
</template>

<script lang="ts">
import ProductComp from './ProductComp.vue'

export default {
    name: 'ProductList',
    components:{
        ProductComp
    },
    data() {
        return{
            product:{
                name: 'Red Sweater',
                price: 19.99
            }
        }
    }
}
</script>