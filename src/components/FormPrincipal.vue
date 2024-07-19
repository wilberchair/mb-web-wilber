<template>
  <div>
    <form id="person-form" @submit.prevent="submitForm">
      <Step :current="step" />
      <div v-if="step === 1" class="form-group">
        <h1>Seja bem vindo(a)</h1>
        <div class="input-container">
          <label for="email">Endereço de e-mail</label>
          <input v-model="form.email" type="email" id="email" name="email" placeholder="Digite o seu Email" @keyup="validateEmail" />
          <div v-if="error" class="error">
            Preencha seu e-mail corretamente
          </div>

          <div class="radio-container">
            <label for="physicalPerson">
              <input id="physicalPerson" type="radio" v-model="form.person" value="physicalPerson" name="select-person" />
              <span>Pessoa Física</span>
            </label>
            <label for="legalPerson">
              <input id="legalPerson" type="radio" v-model="form.person" value="legalPerson" name="select-person" />
              <span>Pessoa Jurídica</span>
            </label>
          </div>
          <div v-if="!form.person && error" class="error">
            Escolha o tipo de regime
          </div>
          <div class="block-buttons">
            <template v-if="step === 1">
              <button v-if="error" type="button" class="action-button block">
                Continuar
              </button>
              <button v-else type="button" class="action-button" @click="nextStep">
                Continuar
              </button>
            </template>
          </div>
        </div>
      </div>

      <div v-if="step === 2 && isPf && !error">
        <FormPerson :person="form" @step="newStep" />
      </div>

      <div v-if="step === 2 && !isPf && !error">
        <FormLegalPerson :person="form" @step="newStep" />
      </div>

      <div v-if="step === 3">
        <Password :person="form" @step="newStep" />
      </div>

      <div v-if="step === 4">
        <ReviewPage :person="form" @step="newStep" />
      </div>
    </form>
  </div>
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
        error: false,
        isPf: false,
        form: {
          email: '',
          person: '',
          name: '',
          cpf: '',
          birth: '',
          phone: '',
          password: '',
        },
        steps: {
          currentStep: '',
        }
      }
    },
    methods: {
      validateEmail() {
        if(HELPERS.validateEmail(this.form.email)) {
          console.log('ok email')
          this.error = false;
        } else {
          console.log('erro email')
          this.error = true;
        }
      },
      validatePerson() {
        console.log('validatePerson')
        return (this.step === 1 && this.form.person)
      },
      nextStep () {
        this.validateEmail();

        if(!this.error) {
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
