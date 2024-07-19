<template>
  <div>
    <h1>Pessoa Física</h1>
    <form id="person-form">
      <div class="input-container">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="name" v-model="person.name" placeholder="Digite o seu Nome">

        <label for="nome">CPF</label>
        <input type="text" id="cpf" name="cpf" v-model="person.cpf" placeholder="Digite o seu CPF" @blur="validateCPF">

        <label for="nome">Data de Nascimento</label>
        <input type="text" id="birth-date" name="birth-date" v-model="person.birth" placeholder="Data de Nascimento">

        <label for="nome">Telefone</label>
        <input type="text" id="phone" name="phone" v-model="person.phone" placeholder="Telefone">
        
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
  import HELPERS from "../helpers/helpers";

  export default {
    name:"FormPerson",
    props: {
      person: Object,
      step: Number,
    },
    methods: {
      validateCPF() {
        if(HELPERS.validateCPF(this.person.cpf)) {
          console.log('ok cpf')
          this.error = false;
        } else {
          console.log('erro cpf')
          this.error = true;
        }
      },
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
