<template lang="pug">
  .c-map
    GMap(
      :center='center'
      :zoom='zoom'
      :options='options'
    )
      GMapMarker(
        v-for="(marker, index) in placelist"
        key="index"
        :position="marker.position"
        :options="markerOptions"
      )
</template>

<style lang="sass">
// wrapper required for overwriting plugin default styles
.c-map,
// plugin wrapper overwritten
.GMap,
.GMap__Wrapper
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
import customMarker from '~/components/MapGoogle/_markerCustomStyles.js'
import placesList from '~/static/places_list.js'

export default {
  components: {
    // empty
  },

  data() {
    return {
      // map options
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
      placelist: placesList,

      // marker custom styles passd to each marker
      markerOptions: {
        icon: customMarker,
      },

      // current clicked marker
      currentMarker: {},
    }
  },

  // mounted: WHEN ALL code on server is already loaded!
  mounted() {
    console.log('MAP component but no map')
  },
}
</script>
