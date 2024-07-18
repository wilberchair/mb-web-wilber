<template>
  <div class="step">
    <h3>Etapa <span>{{ current }}</span> de 5</h3>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: ['current']
}
</script>

<style lang="scss">
  @import '../../assets/style/variables.scss';
  @import './style.scss';
</style>