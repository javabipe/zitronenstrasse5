<template lang="pug">
  nuxt-link(to='/', title='Back to the home page')
    | {{ buttonText }}
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Back to the home page',
    },
  },
}
</script>
