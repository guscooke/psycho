<template>
  <form>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-text-field v-model.trim="nome" :error-messages="nomeErrors" :counter="10" label="nome" required
          @input="$v.nome.$touch()" @blur="$v.nome.$touch()"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field v-model.trim="sobrenome" :error-messages="sobrenomeErrors" :counter="10" label="sobrenome" required
          @input="$v.sobrenome.$touch()" @blur="$v.sobrenome.$touch()"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-text-field v-model.trim="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()"
          @blur="$v.email.$touch()"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-text-field v-model.trim="mobile" :error-messages="mobileErrors" :counter="11" label="Telefone" 
        required 
        @input="$v.mobile.$touch()"
        @blur="$v.mobile.$touch()"></v-text-field>
      </v-col>
    </v-row>
    <!-- SUBMIT -->
    <v-btn class="mr-4" text @click.native="submit">
      enviar
    </v-btn>
    <v-btn text @click.native="clear">
      limpar
    </v-btn>
  </form>
</template>


<script>
  import axios from 'axios';
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nome: { required, maxLength: maxLength(10) },
      sobrenome: { required, maxLength: maxLength(10) },
      email: { required, email },
      mobile: { required, maxLength: maxLength(11)},
    
    
    },

    data() {
      return {
      usuarios: [],  
      nome: '',
      sobrenome: '',
      email: '',
      mobile: '',
     
      }
    },
       
    
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
        if (!this.$v.sobrenome.$dirty) return errors
        !this.$v.sobrenome.maxLength && errors.push('Nome pode ter no máximo 10 caracteres')
        !this.$v.sobrenome.required && errors.push('Precisamos do seu nome.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('precisa ser um email válido')
        !this.$v.email.required && errors.push('E-mail é necessáro')
        return errors
      },
        mobileErrors () {
        const errors = []
        if (!this.$v.mobile.$dirty) return errors
        !this.$v.mobile.maxLength && errors.push('precisa ser um telefone válido')
        !this.$v.mobile.required && errors.push('Telefone é necessáro')
        return errors
      },
    },

    methods: {
      submit () {
   
            this.$v.$touch();

            if (this.$v.$invalid) {
              console.log("form not valid");
            } else {
              console.log("form validated");
              console.log(this.nome, this.sobrenome, this.email, this.mobile);
            }
                     axios.post("http://localhost:5000/usuarios",{
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                mobile: this.mobile

            }) 
            },

              clear () {
                this.$v.$reset()
                this.nome = ''
                this.sobrenome = ''
                this.email = ''
                this.mobile = ''
              }
            }
        }
            
      
          
    
  
  
   
  
</script>

  