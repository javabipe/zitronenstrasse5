<template lang="pug">
  .map-main-wrapper
    h1.heading-title
      | Zitronenstrasse
</template>

<style lang="sass">
.map-main-wrapper
  height: 100%
</style>

<script>
export default {
  components: {
    // empty
  },

  data() {
    return {
      // empty
    }
  },

  // mounted: WHEN ALL code on server is already loaded!
  mounted() {
    console.log('MAP component but no map')
  },
}
</script>
