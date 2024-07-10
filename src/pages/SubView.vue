<script setup lang="ts">

</script>

<template>
  <div>
    <h1>SubView</h1>
    <RouterLink to="/">HomeView</RouterLink>
    {{ $route.params.id }}
  </div>
</template>

<style scoped lang="scss">

</style>
