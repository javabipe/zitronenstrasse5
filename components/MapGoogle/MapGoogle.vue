<template lang="pug">
  .map-main-wrapper
    //- hidden heading for seo.
    //- inside component for design reasons (I'm lazy)
    h1.heading-title
      | Zitronenstrasse
</template>

<style lang="sass">
.map-main-wrapper
  height: 100%

// title for seo
.heading-title
  display: block
  background: pink
</style>

<script>
export default {
  // mounted: WHEN ALL code on server is already loaded!
  mounted() {
    console.log('MAP area loaded')
  },
}
</script>
