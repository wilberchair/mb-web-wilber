+<template>
  <Step current="4" />
  <h1>Senha de acesso</h1>

  <div>
    <form id="person-form">
      <div class="input-container">
        <label for="password">Sua senha</label>
        <input type="text" id="password" name="password" v-model="person.password" placeholder="Digite sua Senha">
        
        <div class="block-buttons">
          <button type="button" class="action-button secondary" @click="prevStep">
            Voltar
          </button>
          <button type="button" class="action-button" @click="nextStep">
            Continuar
          </button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import Step from "../components/Step/Step.vue";
  
  export default {
    name:"Password",
    props: {
      person: Object,
      step: Number,
    },
    methods: {
      nextStep () {
        this.$emit('step', 5)
      },
      prevStep () {
        this.$emit('step', 2);
      },
    }
  }
  
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/_mixins';
  @import '../assets/style/style.scss';
</style>
