<template>
  <h1>Senha de acesso</h1>
  <div class="form-container">
    <label class="form-label" for="password">Sua senha</label>
    <input class="form-input" type="text" id="password" name="password" v-model="person.password" placeholder="Digite sua Senha" />
    <div v-if="error.password" class="error">
      *Preencha uma senha
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
  export default {
    name:"Password",
    props: {
      person: Object,
      step: Number,
    },
    data() {
      return {
        error: {
          password: false,
        }
      }
    },
    methods: {
      validatePassword() {
        if(this.person.password.length > 0) {
          console.log('ok pass')
          this.error.password = false;
        } else {
          console.log('erro pass')
          this.error.password = true;
        }
      },
      nextStep () {
        this.validatePassword();
        if(!this.error.password) {
          this.$emit('step', 4);
        }
      },
      prevStep () {
        this.$emit('step', 2);
      },
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/variables';
  @import '../assets/style/style.scss';
</style>
