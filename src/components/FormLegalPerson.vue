<template>
  <div>
    <h1 class="person-title">Pessoa Jurídica</h1>
    <div class="form-container">
      <label class="forma-label" for="nome">Nome</label>
      <input class="form-input" type="text" id="nome" name="name" v-model="person.name" placeholder="Digite o seu Nome" />
      <div v-if="error.name" class="error">
        *Preencha o campo Nome
      </div>

      <label class="forma-label" for="nome">CNPJ</label>
      <input class="form-input" type="text" id="cnpj" name="cnpj" v-model="person.cnpj" placeholder="Digite o seu CNPJ" @keyup="cnpjMask" @blur="validateCnpj" />
      <div v-if="error.cnpj" class="error">
        *Preencha o campo CNPJ
      </div>
      
      <label class="forma-label" for="nome">Data da Abertura</label>
      <input class="form-input" type="date" id="opening-date" name="opening-date" v-model="person.opening" placeholder="Data da Abertura" />
      <div v-if="error.opening" class="error">
        *Preencha o campo Data
      </div>

      <label class="forma-label" for="nome">Telefone</label>
      <input class="form-input" type="tel" id="phone" name="phone" v-model="person.phone" placeholder="(xx)xxxxx-xxxx" @keyup="phoneMask" />
      <div v-if="error.phone" class="error">
        *Preencha o campo Telefone
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
  </div>
</template>

<script>
  import HELPERS from "../helpers/helpers";

  export default {
    name:"FormLegalPerson",
    props: {
      person: Object,
      step: Number,
    },
    data() {
      return {
        error: {
          name: false,
          cnpj: false,
          opening: false,
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
      validateCnpj() {
        // console.log('valildate CNPJ>>>', this.person.cnpj.replace('.', '').replace('/', '').replace('-', '').replace('.', ''))
        if(HELPERS.validateCNPJ(this.person.cnpj)) {
          console.log('ok cnpj');
          this.error.cnpj = false;
        } else {
          console.log('erro cnpj')
          this.error.cnpj = true;
        }
      },
      cnpjMask(param) {
        this.person.cnpj = HELPERS.cnpjMask(param.target.value);
      },
      validateOpening() {
        if(this.person.opening.length > 0) {
          this.error.opening = false;
        } else {
          this.error.opening = true;
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
        this.validateCnpj();
        this.validateOpening();
        this.validatePhone();
        if(!this.error.name && !this.error.cnpj && !this.error.opening && !this.error.phone) {
          this.$emit('step', 3);
        }
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
