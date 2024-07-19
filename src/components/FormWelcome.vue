<template>
  <Step current="1" />
  <h1>Seja bem vindo(a)</h1>
  <div>{{form}}</div>
  <div>{{steps}}</div>
  <div>
      <!-- <div v-if="step === 1" class="form-group"> -->
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
      <!-- <div class="input-container">
          <button v-if="step === 1" type="button" @click="nextStep">
            Next
          </button>
      </div> -->
      <div class="input-container">
        <!-- <button type="button" @click="prevStep">
          Prev
        </button> -->
        <button type="button" class="action-button" @click="nextStep">
          Nextttt
        </button>
      </div>
  <!-- </div> -->
</template>

<script>
  import Step from "../components/Step/Step.vue";

  export default {
    name:"FormWelcome",
    components: {Step},
    data(){
      return {
        step: 1,
        totalsteps: 3,
        error: false,
        // isPj: false,
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
          console.log('physicalPerson>>>>>');
          this.step++;
        } else if (this.form.person === 'legalPerson') {
          // console.log(this.form.person === 'legalPerson');
          console.log('legalPerson<<<<<<');
          this.step = 3;
        }
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
  @import '../assets/style/style.scss';
</style>
