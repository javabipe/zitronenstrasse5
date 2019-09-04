<template lang="pug">
  .map-main-wrapper
    GMap(
    	:cluster="{options: {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
    	:options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative'}"
    	:zoom="6"
    )
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
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: 15.9819,
        },
        {
          lat: 45.12,
          lng: 16.21,
        },
      ],

      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB...',
        notSelected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAM...',
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
