<script lang="ts">
import { defineComponent } from 'vue';
import MyMessageComponent from './components/MyMessageComponent.vue';
import UserWatcherComponent from './components/UserWatcherComponent.vue';
import PalindromeCheck from './components/PalindromeCheck.vue';
import GitHubReposComponent from './components/GitHubReposComponent.vue';

export default defineComponent({
  components: {
    MyMessageComponent,
    UserWatcherComponent,
    PalindromeCheck,
    GitHubReposComponent,
  }  
})
</script>

<template>
  <MyMessageComponent />
  <UserWatcherComponent />
  <PalindromeCheck />
  <GitHubReposComponent />
</template>


