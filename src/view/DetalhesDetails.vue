<template>
  <section>
    <GoBack />
    <TheNavigation />
   
    <v-container grid-list-md class="grey lighten-5 my-5 mt-6">
      <v-layout row wrap>
        <div class="profissionai-details">
           <!-- <router-link class="links" to="/">
        <v-btn color="Igor" fab x-small dark>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link> -->
          <h2>Especialista: {{ profissionalNome }}</h2>
          <v-avatar>
          <img src="@/assets/img/doutora.jpg" size="128">
          </v-avatar>
        </div>
        <v-flex>
          <v-dialog :value="visible">
                <v-alert  dense                    
                    prominent
                    type="success"><strong>Agendamento realizado com sucesso</strong></v-alert>
          </v-dialog>

          <span></span>

          <v-stepper v-model="fw" vertical>
          <v-stepper-step :complete="fw > 1" step="1">
            <strong>Data</strong>
            <small>Selecione o dia do seu atendimento.</small>
          </v-stepper-step>
          <v-stepper-content bold step="1">

            <!-- ESCOLHER A DATA -->
              <v-date-picker
                v-model="selected_date"
                full-width
                landscape
                header-color="primary"
                locale="pt-br"
                class="mt-3"
                style="margin: 30px 0;"
                @click:date="selectDate"
              />
             
            <v-btn color="primary" @click.native="getHours(selected_date)"><strong>Continuar</strong></v-btn>
            <v-btn text>Cancelar</v-btn>


          </v-stepper-content>
          
          <v-stepper-step :complete="fw > 2" step="2">
           <strong> Horário</strong>
            <small>Selecione o Horário Desejado</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-4" class="mb-5 pa-6" height="350px">
              <v-row v-if="horarios.length">
                <v-col  
                    sm="7"
                    md="7"
                    lg="3" v-for="horario in horarios" :key="horario.id">
                   <!-- <v-chip-group
                    column
                    multiple> -->
                
                  <v-btn
                  solid
                  outlined
                  :elevation="hover ? 24 : 6"
                  class="mx-auto pa-6" color="primary" @click.native="selectHorario(horario.id)"><strong>{{horario.horario}}</strong></v-btn>
                   <!-- </v-chip-group> -->
                </v-col>
              </v-row>
              <v-row v-else color="white">
                <p><strong>A data selecionada não possui horários disponíveis.</strong></p>
                <p><strong>Por favor,</strong> <v-btn color="primary" @click.native="fw=1"><strong>selecione outra data</strong></v-btn></p>
              </v-row>
            </v-card>
            <!--v-btn color="primary" @click.native="fw = 3"><strong>Continuar</strong></v-btn-->
            <v-btn text @click.native="fw=1">Cancelar</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="fw > 3" step="3">
            <strong>Seus dados</strong></v-stepper-step>
          <v-stepper-content step="3">
            <v-card  class="mb-5" height="350px">

              <form>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model.trim="nome" :error-messages="nomeErrors" :counter="10" label="nome" ref="nome" required
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
                <v-btn color="primary" @click.prevent="formValues()"><strong>Continuar</strong></v-btn>
                <v-btn text @click.native="fw=2">Cancelar</v-btn>
              </form>

            </v-card>
            
          </v-stepper-content>
          <v-stepper-step step="4">
            <strong>Confirmação do seu Agendamento</strong>

            </v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px">              
              Ao clicar no botão <strong>Confirmar</strong> abaixo, você estará finalizando o agendamento.
            </v-card>

            <v-btn color="primary" @click.native="confirmarAgendamento()"><strong>Confirmar</strong></v-btn>
            <v-btn text @click.native="fw=3">Cancelar</v-btn>
          </v-stepper-content>
        </v-stepper>

          <!-- <div class="text-center">
            <v-btn class="mt-8" rounded color="primary" dark>
              Agendar
            </v-btn>
          </div> -->
        </v-flex>

      </v-layout>
    </v-container>
     <Foote />
  </section>

</template>
<script>
  import TheNavigation from "@/components/TheNavigation";
  import axios from 'axios';
  // import store from "@/store";
  import GoBack from "@/components/GoBack";
  import Foote from "@/components/Footer";
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
    components: {
      TheNavigation,
      GoBack,
      Foote
    },
    props: ['profissionalId', 'profissionalNome'],
    agendamento: [],
    

    data() {
      return {
        fw: 1,
        rw: 1,
        horarios: [],
        selected_date: '',
        selected_hour: '',
        nome: '',
        sobrenome: '',
        email: '',
        mobile: '',
        visible: false
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
    methods:{
      loadAgendamento() { 
        this.agendamento = [];
        axios.get('http://localhost:5000/agenda')
          .then((response) => {
            this.agendamento = response.data.data;
                console.log(this.agendamento);
          }).catch((error) => {
            console.log(error)
          })
      },
      selectDate(date) {         
        this.selected_date = date;        
      },
      selectHorario(horario) {         
        this.selected_hour = horario;        
        this.fw = 3;
      },
      formValues(horario) {         
        this.$v.$touch();
        if (this.$v.$invalid) {
          alert('Por favor, corrija as informações')
        } else {
          console.log("form validated");
          console.log(this.nome, this.sobrenome, this.email, this.mobile);          
          this.fw= 4;
        }
      },
      getHours(date) {         
        
        axios.get('http://localhost:5000/agenda/horarios/'+ this.profissionalId + '/' + date)
          .then((response) => {            
              this.horarios = response.data.data;
              this.fw = 2;

          }).catch((error) => {
            console.log(error)
          })
      },
      confirmarAgendamento() {
        
        this.visible = false;

        axios.post('http://localhost:5000/agenda/confirmar/', {
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
          mobile: this.mobile,
          horario: this.selected_hour,
          profissional: this.profissionalId
        })
          .then((response) => {            
              this.horarios = response.data;
              this.visible = true;
              this.fw = 1;

          }).catch((error) => {
            console.log(error)
          })
      },
    }
  };
</script>

<style scoped>
  img {
    max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
  }

  .profissionai-details {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
  }

  p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
  }
</style>