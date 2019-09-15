<template lang="pug">
.map-main-wrapper(
  ref="googleMap"
)
  div(
    v-if='Boolean(this.google) && Boolean(this.map)'
  )
    //- div(
    //-  :google='google'
    //-  :map='map'
    //-)
</template>

<style lang="sass">
.map-main-wrapper
  height: 100%
</style>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

// https://markus.oberlehner.net/blog/using-the-google-maps-api-with-vue/
// import '~/components/MapGoogle/_gmaps.js'

export default {
  components: {
    // empty
  },

  props: {
    google: null,
    map: null,
  },

  async mounted() {
    const googleMapApiHere = await GoogleMapsApiLoader({
      apiKey: process.env.googleMapApiKey,
    })
    this.google = googleMapApiHere
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, {
        center: {
          lat: 52.48383,
          lng: 13.4395546,
        },
        zoom: 14,
      })
    },
  },
}
</script>
