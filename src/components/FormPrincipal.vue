<template>
  <form id="person-form" @submit.prevent="submitForm">
    <Step :current="step" />
    <div v-if="step === 1">
      <h1 class="person-title">Seja bem vindo(a)</h1>
      <div class="form-container">
        <label class="form-label" for="email">Endereço de e-mail</label>
        <input class="form-input" v-model="form.email" type="email" id="email" name="email" placeholder="Digite o seu Email" @keyup="validateEmail" />
        <div v-if="error.email" class="error">
          *Preencha seu e-mail corretamente
        </div>

        <div class="radio-container">
          <label class="form-label radio-person" for="physicalPerson">
            <input class="form-input-radio" id="physicalPerson" type="radio" v-model="form.person" value="physicalPerson" name="select-person" />
            <span>Pessoa Física</span>
          </label>
          <label class="form-label radio-person" for="legalPerson">
            <input class="form-input-radio" id="legalPerson" type="radio" v-model="form.person" value="legalPerson" name="select-person" />
            <span>Pessoa Jurídica</span>
          </label>
        </div>
        <div v-if="error.person" class="error">
          *Escolha o tipo de regime
        </div>
        <div class="block-buttons">
          <button type="button" class="action-button" @click="nextStep">
            Continuar
          </button>
        </div>
      </div>
    </div>

    <div v-if="step === 2 && isPf && (!error.email && !error.person)">
      <FormPerson :person="form" @step="newStep" />
    </div>

    <div v-if="step === 2 && !isPf && (!error.email && !error.person)">
      <FormLegalPerson :person="form" @step="newStep" />
    </div>

    <div v-if="step === 3">
      <Password :person="form" @step="newStep" />
    </div>

    <div v-if="step === 4">
      <ReviewPage :person="form" @step="newStep" />
    </div>
  </form>
</template>

<script>
  import Step from "../components/Step/Step.vue";
  import FormPerson from './FormPerson.vue';
  import FormLegalPerson from './FormLegalPerson.vue'
  import Password from './Password.vue'
  import ReviewPage from './ReviewPage.vue'
  import HELPERS from "../helpers/helpers";
  
  export default {
    name:"FormWelcome",
    components: {Step, FormPerson, FormLegalPerson, Password, ReviewPage},
    data(){
      return {
        step: 1,
        error: {
          email: false,
          person: false,
        },
        isPf: false,
        form: {
          email: '',
          person: '',
          name: '',
          cpf: '',
          cnpj: '',
          birth: '',
          phone: '',
          password: '',
          opening: '',
        },
        steps: {
          currentStep: '',
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
      validatePerson() {
        if(this.form.person) {
          this.error.person = false
        } else {
          this.error.person = true
        }
      },
      nextStep () {
        this.validateEmail();
        this.validatePerson();

        if(!this.error.person) {
          if (this.form.person === 'physicalPerson') {
            this.step++;
            this.isPf = true;
          } else if (this.form.person === 'legalPerson') {
            this.isPf = false;
            this.step++;
          }
        }  
      },
      newStep (event) {
        this.step = event;
      },
    }
  }

</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/style.scss';
</style>
