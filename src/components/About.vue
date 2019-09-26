<template>
  <div class="about">
    <h1>Recipes</h1>
    <p>I keep my recipes here</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>