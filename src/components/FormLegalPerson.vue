<template>
  <Step current="2" />
  <h1>Pessoa Jurídica</h1>

  <div>
    <form id="person-form">
      <div class="input-container">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o seu Nome">

        <label for="nome">CNPJ</label>
        <input type="text" id="cnpj" name="cnpj" v-model="cnpj" placeholder="Digite o seu CNPJ">

        <label for="nome">Data da Abertura</label>
        <input type="text" id="opening-date" name="opening-date" v-model="opening" placeholder="Data da Abertura">

        <label for="nome">Telefone</label>
        <input type="text" id="phone" name="phone" v-model="phone" placeholder="Telefone">
      </div>

      <div class="input-container-btn">
        <input type=""  class="back-btn " value="Voltar">
        <input type="submit" class="submit-btn" value="Continuar">
      </div>
    </form>
  </div>
</template>

<script>
  import Step from "../components/Step/Step.vue";
  
  export default {
    name:"FormPerson"
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

  .input-container-btn {
    display: flex;
    flex-direction: row;

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
