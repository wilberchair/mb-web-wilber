<template>
  <FormWelcome />
</template>

<script>
  import FormWelcome from './components/FormWelcome.vue'

  export default {
    name: "",
    components: {
      FormWelcome
    },
    props: ['current']
  }
</script>

<style scoped>

</style>
