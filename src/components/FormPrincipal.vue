<template>
  <!-- <Step current="1" />
  <h1>Seja bem vindo(a)</h1> -->
  <div>{{form}}</div>
  <div>
    <form id="person-form" @submit.prevent="submitForm">
      <div v-if="step === 1" class="form-group">
        <Step current="1" />
        <h1>Seja bem vindo(a)</h1>
        <div class="input-container">
          <label for="email">Endereço de e-mail</label>
          <input v-model="form.email" type="email" id="email" name="email" placeholder="Digite o seu Email" @blur="validateEmail" />
          <div v-if="!form.email && error" class="error">
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
            <button v-if="step === 1" type="button" class="action-button" @click="nextStep">
              Continuar
            </button>
          </div>
        </div>
      </div>

      <div v-if="step === 2">
        <FormPerson :person="form" @step="newStep" />
      </div>

      <div v-if="step === 3">
        <FormLegalPerson :person="form" @step="newStep" />
      </div>

      <div v-if="step === 4">
        <Password :person="form" @step="newStep" />
      </div>

      <div v-if="step === 5">
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
  import UTILS from "../utils/utils";
  
  export default {
    name:"FormWelcome",
    components: {Step, FormPerson, FormLegalPerson, Password, ReviewPage},
    data(){
      return {
        step: 1,
        error: false,
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
      if(UTILS.validateEmail(this.form.email)) {
        console.log('ok email')
        this.error = true;
      } else {
        console.log('erro email')
        this.error = false;
      }
    },
      nextStep () {
        this.error = false;
        if ((this.step === 1 && !this.form.email) ||(this.step === 1 && !this.form.person)) {
          console.log('IF>>>');
          this.error = true;
        } else if (this.form.person === 'physicalPerson') {
          this.step++;
        } else if (this.form.person === 'legalPerson') {
          this.step = 3;
        }
      },
      newStep (event) {
        this.step = event;
      },
      // submitForm () {
      //   alert('Form Submitted!\n' + JSON.stringify(this.form, null, 2));
      // },
    }
  }

</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/_mixins';
  @import '../assets/style/style.scss';
</style>
