<template>
  <div>
    <h1 class="person-title">Pessoa Jurídica</h1>
    <div class="form-container">
      <label class="forma-label" for="nome">Nome</label>
      <input class="form-input" type="text" id="nome" name="name" v-model="person.name" placeholder="Digite o seu Nome" />

      <label class="forma-label" for="nome">CNPJ</label>
      <input class="form-input" type="text" id="cnpj" name="cnpj" v-model="person.cnpj" placeholder="Digite o seu CNPJ" />

      <label class="forma-label" for="nome">Data da Abertura</label>
      <input class="form-input" type="text" id="opening-date" name="opening-date" v-model="person.opening" placeholder="Data da Abertura" />

      <label class="forma-label" for="nome">Telefone</label>
      <input class="form-input" type="text" id="phone" name="phone" v-model="person.phone" placeholder="Telefone" />

      <div class="block-buttons">
        <button type="button" class="action-button secondary" @click="prevStep">
          Voltar
        </button>
        <button type="button" class="action-button" @click="nextStep">
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"FormLegalPerson",
    props: {
      person: Object,
      step: Number,
    },
    methods: {
      nextStep () {
        this.$emit('step', 3);
      },
      prevStep () {
        this.$emit('step', 1);
      },
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/style.scss';
</style>
