<template>
    <!--<h1 class="heading">{{ title }}</h1>
    <p class="description">{{ description }}</p>-->
    <h1 :class="headerClasses.heading">{{ title }}</h1>
    <p :class="headerClasses.description">{{ description }}</p>
</template>

<script lang="ts">
export default {
    name: 'HeadingComponent',

    data(){
        return{
            title: 'Welcome to Vue Restaurant',
            description: 'A Vue.js project to learn Vue.js',
            titleColor : "#178c0e"
        };
    },
}
</script>
<!--
<style scoped>
/**
.heading {
    color: #178c02;
    font-size: 2em;
}

.description {
    color: #b76210;
    font-size: 1em;
}
 */
.heading {
    color: v-bind(titleColor);
    font-size: 2em;
}
</style>
-->
<style module="headerClasses">
.heading {
    color: #178c02;
    font-size: 2em;
}

.description {
    color: #b76210;
    font-size: 1em;
}
</style>