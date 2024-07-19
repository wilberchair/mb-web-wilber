<template>
  <FormPrincipal />
</template>

<script>
  import FormPrincipal from './components/FormPrincipal.vue'

  export default {
    name: "",
    components: {
      FormPrincipal
    },
    props: ['current']
  }
</script>

<style scoped>

</style>
