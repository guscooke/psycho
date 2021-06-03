<template>
  <form>
    <v-text-field
      v-model="nome"
      :error-messages="nomeErrors"
      :counter="10"
      label="nome"
      required
      @input="$v.nome.$touch()"
      @blur="$v.nome.$touch()"
    ></v-text-field>
        <v-text-field
      v-model="sobrenome"
      :error-messages="sobrenomeErrors"
      :counter="10"
      label="sobrenome"
      required
      @input="$v.sobrenome.$touch()"
      @blur="$v.sobrenome.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <!-- <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select> -->
    <!-- <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox> -->

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nome: { required, maxLength: maxLength(10) },
      sobrenome: { required, maxLength: maxLength(10) },
      email: { required, email },
    
    
    },

    data: () => ({
      nome: '',
      sobrenome: '',
      email: '',
      
    }),

    computed: {
   
 
      nomeErrors () {
        const errors = []
        if (!this.$v.nome.$dirty) return errors
        !this.$v.nome.maxLength && errors.push('Nome pode ter no máximo 10 caracteres')
        !this.$v.nome.required && errors.push('Precisamos do seu nome.')
        return errors
      },
         sobrenomeErrors () {
        const errors = []
        if (!this.$v.nome.$dirty) return errors
        !this.$v.nome.maxLength && errors.push('Nome pode ter no máximo 10 caracteres')
        !this.$v.nome.required && errors.push('Precisamos do seu nome.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('precisa ser um email válido')
        !this.$v.email.required && errors.push('E-mail é necessáro')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.nome = ''
        this.sobrenome = ''
        this.email = ''
       
      },
    },
  }
</script>