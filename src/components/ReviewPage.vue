<template>
  <Step current="5" />
  <h1>Revise suas informações</h1>

  <div>{{ person }}</div>
  <div>{{ step }}</div>

  <div>
    <form id="person-form">
      <div class="input-container">
        <label for="email">Endereço de Email</label>
        <input type="text" id="email" name="email" v-model="person.email" placeholder="Digite o seu Email">

        <label for="nome">Nome</label>
        <input type="text" id="nome" name="name" v-model="person.name" placeholder="Digite o seu Nome">

        <label for="nome">CPF</label>
        <input type="text" id="cpf" name="cpf" v-model="person.cpf" placeholder="Digite o seu CPF">

        <label for="nome">Data de Nascimento</label>
        <input type="text" id="birth-date" name="birth-date" v-model="person.birth" placeholder="Data de Nascimento">

        <label for="nome">Telefone</label>
        <input type="text" id="phone" name="phone" v-model="person.phone" placeholder="Telefone">

        <label for="senha">Senha</label>
        <input type="text" id="senha" name="senha" v-model="person.password" placeholder="Digite sua Senha">
        
        <div class="block-buttons">
          <button type="button" class="action-button secondary" @click="prevStep">
            Voltar
          </button>
          <button type="button" class="action-button" @click="submitForm">
            Cadastrar
          </button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import Step from "../components/Step/Step.vue";
  
  export default {
    name:"ReviewPage",
    props: {
      person: Object,
      step: Number,
    },
    methods: {
      prevStep () {
        this.$emit('step', 4);
      },
      submitForm () {
        console.log('FOMRULARIO', this.form);
        alert('Form Submitted!\n' + JSON.stringify(this.person, null, 2));
      }, 
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/_mixins';
  @import '../assets/style/style.scss';
</style>
