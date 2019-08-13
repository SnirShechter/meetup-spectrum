<template>
  <div class="layout-default">
    <app-header />
    <nuxt class="main container" />
  </div>
</template>

<script>
  import AppHeader from "../components/AppHeader";
  export default {
    components: {AppHeader}
  }
</script>

<style lang="scss" scoped>
  .layout-default {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .main {
      $padding-y: 60px;
      padding-top: $padding-y;
      padding-bottom: $padding-y;
    }
  }
</style>
