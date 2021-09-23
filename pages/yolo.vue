<template>
    <div>
        <h1>YOLO - PAGE</h1>

        <NuxtLink to="/">Home Page</NuxtLink>
    </div>
</template>

<script>
export default {
    // it seems that when call any HEAD property, all data from nuxt config are "re-called"
    // this has sense.
    // but for us MODERNIZR has already overwritten defual nuxt (nuxt.config) html classes, so issue
    // head: {
    //     title: 'yolo CUSTOM meta title',
    //     meta: [
    //         {
    //             hid: 'description',
    //             name: 'description',
    //             content: 'yolo CUSTOM meta Descroption nnnnnnnnnn',
    //         },
    //     ],
    // },
}
</script>
