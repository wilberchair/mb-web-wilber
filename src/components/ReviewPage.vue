<template>
  <h1>Revise suas informações</h1>
  <div class="form-container">
    <label class="form-label" for="email">Endereço de Email</label>
    <input class="form-input" type="text" id="email" name="email" v-model="person.email" placeholder="Digite o seu Email" />
    <div v-if="error.email" class="error">
      *Preencha o campo Email
    </div>

    <label class="form-label" for="nome">Nome</label>
    <input class="form-input" type="text" id="nome" name="name" v-model="person.name" placeholder="Digite o seu Nome" />
    <div v-if="error.name" class="error">
      *Preencha o campo Nome
    </div>

    <label class="form-label" for="nome">CPF</label>
    <input class="form-input" type="text" id="cpf" name="cpf" v-model="person.cpf" placeholder="Digite o seu CPF"  @keyup="cpfMask" @blur="validateCpf" />
    <div v-if="error.cpf" class="error">
      *Preencha o campo CPF
    </div>

    <label class="form-label" for="nome">Data de Nascimento</label>
    <input class="form-input" type="date" id="birth-date" name="birth-date" v-model="person.birth" placeholder="Data de Nascimento" />
    <div v-if="error.birth" class="error">
      *Preencha o campo Data de Nascimento
    </div>

    <label class="form-label" for="nome">Telefone</label>
    <input class="form-input" type="text" id="phone" name="phone" v-model="person.phone" placeholder="Telefone" @keyup="phoneMask" />
    <div v-if="error.phone" class="error">
      *Preencha o campo Telefone
    </div>

    <label class="form-label" for="senha">Senha</label>
    <input class="form-input" type="text" id="senha" name="senha" v-model="person.password" placeholder="Digite sua Senha" />
    <div v-if="error.password" class="error">
      *Preencha o campo Senha
    </div>

    <div class="block-buttons">
      <button type="button" class="action-button secondary" @click="prevStep">
        Voltar
      </button>
      <button type="button" class="action-button" @click="submitForm">
        Cadastrar
      </button>
    </div>
  </div>
</template>

<script>
  import HELPERS from "../helpers/helpers";
  
  export default {
    name:"ReviewPage",
    props: {
      person: Object,
      step: Number,
    },
    data() {
      return {
        error: {
          email: false,
          name: false,
          cpf: false,
          birth: false,
          phone: false,
          password: false,
        }
      }
    },
    methods: {
      validateEmail() {
        if(HELPERS.validateEmail(this.form.email)) {
          this.error.email = false;
        } else {
          this.error.email = true;
        }
      },
      validateName() {
        if(this.person.name.length > 0) {
          this.error.name = false;
        } else {
          this.error.name = true;
        }
      },
      validateCpf() {
        if(HELPERS.validateCPF(this.person.cpf)) {
          this.error.cpf = false;
        } else {
          this.error.cpf = true;
        }
      },
      cpfMask(param) {
        this.person.cpf = HELPERS.cpfMask(param.target.value);
      },
      validateBirth() {
        if(this.person.birth.length > 0) {
          this.error.birth = false;
        } else {
          this.error.birth = true;
        }
      },
      validatePhone() {
        if(this.person.phone.length > 0) {
          this.error.phone = false;
        } else {
          this.error.phone = true;
        }
      },
      phoneMask(param) {
        this.person.phone = HELPERS.phoneMask(param.target.value);
      },
      validatePassword() {
        if(this.person.password.length > 0) {
          this.error.password = false;
        } else {
          this.error.password = true;
        }
      },
      prevStep () {
        this.$emit('step', 3);
      },
      submitForm () {
        this.validateName();
        this.validateCpf();
        this.validateBirth();
        this.validatePhone();
        this.validatePassword();
        if(!this.error.email && !this.error.name && !this.error.cpf && !this.error.birth && !this.error.phone && !this.error.password) {
          alert('Form Submitted!\n' + JSON.stringify(this.person, null, 2));
        }
      }, 
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/style.scss';
</style>
