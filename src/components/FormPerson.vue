<template>
  <div>
    <h1 class="person-title">Pessoa Física</h1>
    <div class="form-container">
      <label class="form-label" for="nome">Nome</label>
      <input class="form-input" id="nome" type="text" name="name" v-model="person.name" placeholder="Digite o seu Nome" />
      <div v-if="error" class="error">
        Preencha o campo Nome
      </div>

      <label class="form-label" for="nome">CPF</label>
      <input class="form-input" id="cpf" type="number" name="cpf" v-model="person.cpf" placeholder="Digite o seu CPF" @blur="cpfMask" />
      <div v-if="error" class="error">
        Preencha o CPF corretamente
      </div>

      <label class="form-label" for="nome">Data de Nascimento</label>
      <input class="form-input" id="birth-date" type="date" name="birth-date" v-model="person.birth" placeholder="Data de Nascimento" />
      <div v-if="error" class="error">
        Preencha sua data de nascimento
      </div>

      <label class="form-label" for="nome">Telefone</label>
      <input class="form-input" id="phone" name="phone" v-model="person.phone" placeholder="(xx)xxxxx-xxxx" @blur="phoneMask" />
      <div v-if="error" class="error">
        Preencha o Telefone corretamente
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
    name:"FormPerson",
    props: {
      person: Object,
      step: Number,
      error: Boolean,
    },
    methods: {
      cpfMask() {
        if(HELPERS.cpfMask(this.person.cpf)) {
          console.log('ok cpf')
          this.error = false;
        } else {
          console.log('erro cpf')
          this.error = true;
        }
      },
      phoneMask() {
        if(HELPERS.phoneMask(this.person.phone)) {
          console.log('phone ok')
          this.error = false;
        } else {
          console.log('phone erro')
          this.error = true;
        }
      },
      nextStep () {
        this.validateCPF();
        this.$emit('step', 3);
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
