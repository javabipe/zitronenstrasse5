<template lang="pug">
  .map-main-wrapper
    GMap(
      :center='center'
      :zoom='zoom'
      :options='options'
    )
</template>

<style lang="sass">
.map-main-wrapper
  height: 100%

// plugin wrapper overwritten
.GMap,
.GMap__Wrapper
  width: 100%
  height: 100%

  // map bg when loading
  .gm-style
    background: $color_map_bg

  // remove google cc
  // and remove some weird grey box set on right side from google
  .gm-style-cc
    display: none
</style>

<script>
import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'
export default {
  components: {
    // empty
  },

  data() {
    return {
      center: {
        lat: 52.48383,
        lng: 13.4395546,
      },
      zoom: 14,
      options: {
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        // set custom map styles
        styles: mapStylesDark,
      },

      // mapStyle: [
      //   ...
      // ],
      //
      // currentLocation: {}
    }
  },

  // mounted: WHEN ALL code on server is already loaded!
  mounted() {
    console.log('MAP component but no map')
  },
}
</script>
