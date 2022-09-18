<template>
<div>
  <p>name : {{ fetchUserInfo.id }}</p>
  <p>karma : {{ fetchUserInfo.karma }}</p>
  <p>created : {{ fetchUserInfo.created }}</p>
</div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "UserView",
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
  computed:{
    ...mapGetters(['fetchUserInfo'])
  }
}
</script>

<style scoped>

</style>