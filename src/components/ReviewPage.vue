<template>
  <h1>Revise suas informações</h1>
  <div>
    <div class="form-container">
      <label class="form-label" for="email">Endereço de Email</label>
      <input class="form-input" type="text" id="email" name="email" v-model="person.email" placeholder="Digite o seu Email" />

      <label class="form-label" for="nome">Nome</label>
      <input class="form-input" type="text" id="nome" name="name" v-model="person.name" placeholder="Digite o seu Nome" />

      <label class="form-label" for="nome">CPF</label>
      <input class="form-input" type="text" id="cpf" name="cpf" v-model="person.cpf" placeholder="Digite o seu CPF" />

      <label class="form-label" for="nome">Data de Nascimento</label>
      <input class="form-input" type="text" id="birth-date" name="birth-date" v-model="person.birth" placeholder="Data de Nascimento" />

      <label class="form-label" for="nome">Telefone</label>
      <input class="form-input" type="text" id="phone" name="phone" v-model="person.phone" placeholder="Telefone" />

      <label class="form-label" for="senha">Senha</label>
      <input class="form-input" type="text" id="senha" name="senha" v-model="person.password" placeholder="Digite sua Senha" />
      
      <div class="block-buttons">
        <button type="button" class="action-button secondary" @click="prevStep">
          Voltar
        </button>
        <button type="button" class="action-button" @click="submitForm">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ReviewPage",
    props: {
      person: Object,
      step: Number,
    },
    methods: {
      prevStep () {
        this.$emit('step', 3);
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
  @import '../assets/style/style.scss';
</style>
