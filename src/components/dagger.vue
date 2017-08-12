<template>
  <div class="hello" v-if="this.$store.state.showdagger">
    <h1>dagger</h1>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a{color:red;}
</style>
