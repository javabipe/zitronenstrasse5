<template>
    <div class="b-page-slug">
        <div class="container">
            <h1 v-if="content.title">
                {{ content.title }}
            </h1>

            <AtomRichText
                v-if="content.description"
                :text="content.description"
            />
        </div>
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

    head() {
        const metaTitle = this.content.metaTitle
            ? `${this.content.metaTitle} | ${this.$config.metaHeadData.titleShort}`
            : this.$config.metaHeadData.titleShort

        const metaDescription = this.content.metaDescription
            ? `${this.content.metaDescription} | ${this.$config.metaHeadData.description}`
            : this.$config.metaHeadData.description

        // Set Meta Tags for the Page (with fallback)
        return {
            title: metaTitle,

            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: metaDescription,
                },

                // OG options for open graph: Fb and Linkedin
                {
                    hid: `og:title`,
                    property: 'og:title',
                    content: metaTitle,
                },

                {
                    hid: `og:description`,
                    property: 'og:description',
                    content: metaDescription,
                },

                // Twitter card
                {
                    hid: `twitter:title`,
                    property: 'twitter:title',
                    content: metaTitle,
                },
                {
                    hid: `twitter:description`,
                    property: 'twitter:description',
                    content: metaDescription,
                },

                {
                    hid: `twitter:image:alt`,
                    property: 'twitter:image:alt',
                    content: metaTitle,
                },
            ],
        }
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
.b-page-slug
    position: relative
    min-height: 100%
    // padding top for fixed header alignment
    padding: 60px 0
</style>
