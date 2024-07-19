<template>
  <Step current="2" />
  <h2 class="title">Pessoa Jurídica</h2>

  <div>
      <div class="input-container">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o seu Nome">

        <label for="nome">CNPJ</label>
        <input type="text" id="cnpj" name="cnpj" v-model="cnpj" placeholder="Digite o seu CNPJ">

        <label for="nome">Data da Abertura</label>
        <input type="text" id="opening-date" name="opening-date" v-model="opening" placeholder="Data da Abertura">

        <label for="nome">Telefone</label>
        <input type="text" id="phone" name="phone" v-model="phone" placeholder="Telefone">
      </div>

      <div class="input-container">
        <button type="button" class="action-button secondary" @click="prevStep">
          Voltar
        </button>
        <button type="button" class="action-button" @click="nextStep">
          Continuar
        </button>
      </div>
  </div>
</template>

<script>
  import Step from "../components/Step/Step.vue";
  
  export default {
    name:"FormLegalPerson",
    props: {
      person: Object,
      step: Number,
    },
    methods: {
      nextStep () {
        this.$emit('step', 4);
      },
      prevStep () {
        this.$emit('step', 1);
      },
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/_mixins';
  @import '../assets/style/style.scss';
</style>
