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
// https://markus.oberlehner.net/blog/using-the-google-maps-api-with-vue/
// import '~/components/MapGoogle/_gmaps.js'

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
    console.log('MAP component >> START')
    //
    // try {
    //   const google = await gmapsInit()
    //   const geocoder = new google.maps.Geocoder()
    //   const map = new google.maps.Map(this.$el)
    //
    //   geocoder.geocode({ address: 'Germany' }, (results, status) => {
    //     if (status !== 'OK' || !results[0]) {
    //       throw new Error(status)
    //     }
    //
    //     map.setCenter(results[0].geometry.location)
    //     map.fitBounds(results[0].geometry.viewport)
    //   })
    // } catch (error) {
    //   console.error(error)
    // }

    console.log('MAP component >> END')
  },
}
</script>
