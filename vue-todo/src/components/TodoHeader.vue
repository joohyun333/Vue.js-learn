<template>
  <header>
    <h1>{{ this.$store.state.headerText }}</h1>
  </header>
</template>

<script>
export default {};
</script>

// scoped > 컴포넌트안에서만 유효한 속성이 됨.
<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
