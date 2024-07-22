<template>
  <h1 class="person-title">Pessoa Física</h1>
  <div class="form-container">
    <label class="form-label" for="nome">Nome</label>
    <input class="form-input" id="nome" type="text" name="name" v-model="person.name" placeholder="Digite o seu Nome" />
    <div v-if="error.name" class="error">
      *Preencha o campo Nome
    </div>

    <label class="form-label" for="nome">CPF</label>
    <input class="form-input" id="cpf" type="text" name="cpf" v-model="person.cpf" placeholder="Digite o seu CPF" @keyup="cpfMask" @blur="validateCpf" />
    <div v-if="error.cpf" class="error">
      *Preencha o CPF corretamente
    </div>

    <label class="form-label" for="nome">Data de Nascimento</label>
    <input class="form-input" id="birth-date" type="date" name="birth-date" v-model="person.birth" placeholder="Data de Nascimento" />
    <div v-if="error.birth" class="error">
      *Preencha sua data de nascimento
    </div>

    <label class="form-label" for="nome">Telefone</label>
    <input class="form-input" id="phone" name="phone" type="tel" v-model="person.phone" placeholder="(xx)xxxxx-xxxx" @keyup="phoneMask" />
    <div v-if="error.phone" class="error">
      *Preencha o Telefone corretamente
    </div>

    <div class="block-buttons">
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
  import HELPERS from "../helpers/helpers";

  export default {
    name:"FormPerson",
    props: {
      person: Object,
      step: Number,
      error: Object,
    },
    data() {
      return {
        error: {
          name: false,
          cpf: false,
          birth: false,
          phone: false,
        }
      }
    },
    methods: {
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
      nextStep () {
        this.validateName();
        this.validateCpf();
        this.validateBirth();
        this.validatePhone();
        if(!this.error.name && !this.error.cpf && !this.error.birth && !this.error.phone) {
          this.$emit('step', 3);
        }
      },
      prevStep () {
        this.$emit('step', 1);
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/style.scss';
</style>
