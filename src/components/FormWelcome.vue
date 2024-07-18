<template>
  <Step current="1" />
  <h1>Seja bem vindo(a)</h1>
  <div>{{form}}</div>
  <div>
    <form id="person-form" @submit.prevent="submitForm">
      <div v-if="step === 1" class="form-group">
        <div class="input-container">
          <label for="email">Endereço de e-mail</label>
          <input v-model="form.email" type="email" required id="email" name="email" placeholder="Digite o seu Email" />
          <div v-if="!form.email && error" class="error">
            Escreva seu email
          </div>
        </div>

        <div class="input-container">
          <div class="radio-container">
            <label :for="physicalPerson">
              <input :id="physicalPerson" type="radio" v-model.sync="form.person" value="physicalPerson" name="select-person" />
              <span>Pessoa Física</span>
            </label>
            <label :for="legalPerson">
              <input :id="legalPerson" type="radio" v-model="form.person" value="legalPerson" name="select-person" />
              <span>Pessoa Jurídica</span>
            </label>
          </div>
        </div>
        <div v-if="!form.person && error" class="error">
          Escreva seu genero
        </div>
      </div>
      <div class="input-container">
          <button v-if="step === 1" type="button" @click="nextStep">
            Next
          </button>
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
    </form>
  </div>
</template>

<script>
  import Step from "../components/Step/Step.vue";
  import FormPerson from './FormPerson.vue';
  import FormLegalPerson from './FormLegalPerson.vue'
  import Password from './Password.vue'
  
  export default {
    name:"FormWelcome",
    components: {Step, FormPerson, FormLegalPerson, Password},
    data(){
      return {
        step: 1,
        totalsteps: 3,
        error: false,
        isPj: false,
        form: {
          email: '',
          person: '',
          name: '',
          cpf: '',
          birth: '',
          phone: '',
        },
        steps: {
          currentStep: '',
        }
      }
    },

    methods: {
      nextStep () {
        this.error = false;
        if ((this.step === 1 && !this.form.email) ||(this.step === 1 && !this.form.person)) {
          console.log('IF>>>');
          this.error = true;
        } else if (this.form.person === 'physicalPerson') {
          // console.log(this.form.person === 'physicalPerson');
          // console.log('physicalPerson>>>>>');
          this.step++;
        } else if (this.form.person === 'legalPerson') {
          // console.log(this.form.person === 'legalPerson');
          // console.log('legalPerson<<<<<<');
          this.step = 3;
        }
        // else if (this.step < 4) {
        //   this.step++;
        // }
      },
      prevStep () {
        if (this.step > 1) {
          this.step--;
        }
      },
      newStep (event) {
        this.step = event;
      },
      submitForm () {
        alert('Form Submitted!\n' + JSON.stringify(this.form, null, 2));
      },
    }
  }

</script>

<style lang="scss">
@import '../assets/style/variables';
@import '../assets/style/_mixins';
  #person-form {
    /* max-width: 400px; */
    margin: 0 auto;
  }

  .input-container {
    // display: flex;
    // flex-direction: column;
    // margin-bottom: 20px;

    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 0.3rem;
        text-align: left;
    }

    input {
        border-radius: 5px;
        border: 2px solid;
        border-color: $color-secondary;
        padding: 5px;
        font-size: 16px;
        height: 1.5rem; 
        
        &:hover {
            border-color: $color-black;
        }
        &.error {
            border-color: red;
            background: #fff2f2;
            &:hover {
                border-color: red;
                background: #fff2f2
            }
        }

        &::placeholder {
            color: #bbb;
        }
    }

    .radio-container {
      display: flex;
      justify-content: space-around;
    }

    .submit-btn {
      @include transition(all, 0.3s);

      border-radius: 5px;
      background-color: $color-primary;
      width: 100%;
      font-size: 0.6rem;
      height: 1.5rem;
      border: 0;
      cursor: pointer;

      color: $color-white;

      &:hover {
          background-color: $color-black;
      }

      &[disabled] {
          background-color: $color-secondary;
          cursor: text;
      }

      &.secondary {
          background-color: $color-white;
          color: $color-primary;
          border: 2px solid  $color-primary;

          &:hover {
              color: $color-black;
              border: 2px solid  $color-black;
          }
      }
    }
  }

  // label {
  //   font-weight: bold;
  //   margin-bottom: 5px;
  //   color: #222;
  //   text-align: left;
  // }

</style>
