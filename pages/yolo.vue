<template>
    <div>
        <h1>YOLO - PAGE</h1>

        <NuxtLink to="/">Home Page</NuxtLink>
    </div>
</template>

<script>
export default {
    head: {
        title: 'yolo CUSTOM meta title',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'yolo CUSTOM meta Descroption nnnnnnnnnn',
            },
        ],
    },
}
</script>
