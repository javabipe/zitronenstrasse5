<template>
    <div class="b-page-index">
        <storyblockComponent
            :is="blok.component"
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok.component"
        />
    </div>
</template>

<script>
import transitionTime from '../assets/javascripts/utilities/transitionTime'


const timeTransitionCalculation = (transitionTime / 2) * 1.2

export default {
    transition: {
        beforeLeave() {
            if (this.$store.state.navigation.isOpen) {
                setTimeout(() => {
                    this.$store.commit('navigation/toggleOpenState')
                    // little more of page transition time (now 500ms)
                }, timeTransitionCalculation)
            }
        },
    },

    // on stotry block set real path as "/" for homepage. it works (make the trick) on storyblok preview interface
    asyncData(context) {
       const placesList = [
    {
        // 001
        // ChIJX2MutgxPqEcR2nvgHiQ0ojE
        title: 'Geschwister Nothaft Café',
        address: 'Schwarzastraße 9, 12055',
        thumb: '001_nothaftcafes.jpg',
        thumbCredits: 'Geschwister Nothaft Café FB Page',
        website: 'http://nothaftcafes.com/',
        fbPage: 'https://www.facebook.com/geschwisternothaft/',
        position: {
            lat: 52.472729,
            lng: 13.454635,
        },
    }
    ]
    return placesList
    },

    mounted() {
        // trick for removing nav overlay if coming on page from error page (by navigation link/logic)
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>

<style lang="sass">
.b-page-index
    // padding top for fixed header alignment
    padding: 60px 0
    position: relative
    min-height: 100%
</style>
