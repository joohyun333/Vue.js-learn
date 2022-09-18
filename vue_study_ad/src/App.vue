<template>
  <div>
    <Toolbar></Toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
export default {
  components:{
    Toolbar
  }
}
</script>

<style>
</style>
