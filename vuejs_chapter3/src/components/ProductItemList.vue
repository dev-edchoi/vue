<template>    
    <ListLayout v-slot="{ item }">
        <img
          v-if="item.thumbnail"
          class="list-layout__item__thumbnail"
          :src="item.thumbnail"
          :alt="item.name"
          width="200"
        />
        <div class="list-layout__item__name">{{ item.name }}</div>
    </ListLayout>
</template>
