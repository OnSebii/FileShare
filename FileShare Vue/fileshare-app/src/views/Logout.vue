<template>
  <div class="container">
    <h1 class="text-center">Your are logged out!</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  async created() {
    // enter your code here
    localStorage.clear();
    await axios({
      url: 'http://127.0.0.1:3000/logout',
      method: 'get',
    });
    this.$router.push('/').catch(() => {});
  },
};
</script>
