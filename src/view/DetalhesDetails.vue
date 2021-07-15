<template>
  <section>
    <GoBack />
    <TheNavigation />

    <v-container grid-list-md class="grey lighten-5 my-5 mt-6 fontBold">
      <v-layout row wrap>
        <div class="profissionai-details">
    
           <v-row  align="center" justify="center" >
             
              
          <h2>Especialista: </h2><h3 class="text--secondary">{{ profissionalNome }} {{ profissionalSobrenome}}</h3>
      
        
          <h4>| Valor da Consulta:</h4><h3 class="text--secondary">R$ {{profissionalTipo == 'psiquiatria' ? '300.00' : '180.00' }}</h3>
               
          (<h5>{{profissionalTipo}} </h5>)
          

          
          <!-- <v-avatar>
            <img src:{{ profissionalImagem }} size="128">
          </v-avatar> -->
           </v-row>
        </div>
        <v-flex>
          <v-dialog :value="visible">
            <v-alert dense prominent type="success"><strong>Redirecionando ao pagamento para finalizar o agendamento</strong></v-alert>
          </v-dialog>

          <span></span>

          <v-stepper v-model="fw" vertical>
            <v-stepper-step :complete="fw > 1" step="1">
              <strong>Data</strong>
              <small>Selecione o dia do seu atendimento.</small>
            </v-stepper-step>
            <v-stepper-content  bold step="1">

              <!-- ESCOLHER A DATA -->
              <v-date-picker v-model="selected_date" full-width dark  header-color="primary" locale="pt-br"
                class="mt-3" style="margin:30px 0;" @click:date="selectDate" />

              <v-btn color="primary" @click="getHours(selected_date)"><strong>Continuar</strong></v-btn>
              <v-btn text>Cancelar</v-btn>


            </v-stepper-content>

            <v-stepper-step :complete="fw > 2" step="2">
              <strong>Horário</strong>
              <small>Selecione o Horário Desejado</small>
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card color="grey lighten-4" class="mb-5 pa-6" height="350px">
                <v-row v-if="horarios.length">
                  <v-col sm="7" md="7" lg="3" v-for="horario in horarios" :key="horario.id">

                    <v-btn solid outlined :elevation=" 24" class="mx-auto pa-6" color="primary"
                      @click="selectHorario(horario.id, horario.horario)">
                      <strong>{{horario.horario}}</strong></v-btn>
                    <!-- </v-chip-group> -->
                  </v-col>
                </v-row>
                <v-row v-else color="white">
                  <p><strong>A data selecionada não possui horários disponíveis.</strong></p>
                  <p><strong>Por favor,</strong>
                    <v-btn color="primary" @click="fw=1"><strong>selecione outra data</strong></v-btn>
                  </p>
                </v-row>
              </v-card>
              <!--v-btn color="primary" @click="fw = 3"><strong>Continuar</strong></v-btn-->
              <v-btn text @click="fw=1">Cancelar</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="fw > 3" step="3">
              <strong>Seus dados</strong></v-stepper-step>
            <v-stepper-content step="3">
              <v-card  class="mb-5" height="400px">

                <form>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model.trim="nome" :error-messages="nomeErrors" :counter="10" label="nome"
                        ref="nome" required @input="$v.nome.$touch()" @blur="$v.nome.$touch()"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model.trim="sobrenome" :error-messages="sobrenomeErrors" :counter="10"
                        label="sobrenome" required @input="$v.sobrenome.$touch()" @blur="$v.sobrenome.$touch()">
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model.trim="email" :error-messages="emailErrors" label="E-mail" required
                        @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model.trim="mobile" :error-messages="mobileErrors" :counter="11" label="Telefone"
                        required @input="$v.mobile.$touch()" @blur="$v.mobile.$touch()"></v-text-field>
                    </v-col>
                  </v-row>
                
                </form>
              </v-card>
               <v-btn color="primary" @click.prevent="formValues()"><strong>Continuar</strong></v-btn>
                  <v-btn text @click="fw=2">Cancelar</v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">
              <strong>Confirmação do Agendamento</strong>
            </v-stepper-step>


            <v-stepper-content step="4">
              <v-card   elevation="4"
                        outlined 
                        color="Igor" 
                        class="white--text mb-5"  
                        height="400px" 
                        align="left">
                <h3 class='mt-3' align='center'>Ao clicar no botão <strong>Confirmar</strong> abaixo, você será redirecionado ao Pagseguro. </h3>
                </br>
                <h4 align='center'>Assim que o pagamento for aprovado você receberá um e-mail de confirmação do agendamento e instruções para a consulta online.</h4>

                <h4 class="mt-3"><strong>Especialista: {{ profissionalNome }} {{ profissionalSobrenome }} </strong> </h4>
                <h4><strong>Especialidade:</strong> {{ profissionalTipo }} </h4>
                <h4><strong>Data:</strong> {{ selected_date | moment("DD/MM/YYYY") }}</h4>
                <h4><strong>Horário:</strong> {{ selected_hour_label }}</h4>
                <h4><strong>Valor:R$</strong> {{profissionalTipo == 'psiquiatria' ? '300.00' : '180.00' }}</h4>
                 <v-divider class="white--text mx-4 mb-3 mt-3"></v-divider>
                <h4><strong>Seu nome:</strong> {{ nome}} {{ sobrenome }}</h4>
                <h4><strong>Email:</strong> {{email}}</h4>
                <h4><strong>contato:</strong> {{mobile}}</h4>
                
              </v-card>

              <v-btn color="primary" @click="confirmarAgendamento()"><strong>Confirmar</strong></v-btn>
              <v-btn text @click="fw=3">Cancelar</v-btn>
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
    <!-- <Foote /> -->
  </section>

</template>

<script>

  import TheNavigation from "@/components/TheNavigation"
  import axios from 'axios'
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
    props: ['profissionalId', 'profissionalNome', 'profissionalSobrenome', 'profissionalTipo'],
    agendamento: [],
  
    data() {
      return { 
        
        fw: 1,
        rw: 1,
        horarios: [],
        relatorio: [],
        selected_date: '',
        selected_hour: '',
        selected_hour_label: '',
        nome: '',
        sobrenome: '',
        email: '',
        mobile: '',
        visible: false,
        token: '',
        checkout_code: '',
        cartao_creditos_options: [],
        debito_online_options: [],
        boleto_options: [],
      }
    },
    computed: {

       profissionai() {
        return this.data.profissionais.find(
          profissionai => profissionai.id === this.profissionaiId
        )
      },

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
        axios.get(process.env.VUE_APP_ROOT_API + '/agenda')
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
      selectHorario(horario, horario_label) {         
        this.selected_hour = horario;        
        this.selected_hour_label = horario_label;
        this.fw = 3;
      },
      formValues(horario) {         
        this.$v.$touch();
        if (this.$v.$invalid) {
          alert('Por favor, corrija as informações')
        } else {
          console.log("form validated");
          console.log(this.nome, this.sobrenome, this.email, this.mobile);        
          console.log(process.env.VUE_APP_PAGSEGURO_URL);  
          this.fw= 4;
        }
      },
      getHours(date) {         
        
        axios.get(process.env.VUE_APP_ROOT_API + '/agenda/horarios/'+ this.profissionalId + '/' + date)
          .then((response) => {            
              this.horarios = response.data.data;
              this.fw = 2;

          }).catch((error) => {
            console.log(error)
          })
      },
      confirmarAgendamento() {
        
        this.visible = false;

        axios.post(process.env.VUE_APP_ROOT_API + '/agenda/confirmar/', {
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
          mobile: this.mobile,
          horario: this.selected_hour,
          profissional: this.profissionalId,
          item: this.profissionalTipo,
          valor: this.profissionalTipo == 'psiquiatria' ? '300.00' : '180.00'
        })
          .then((response) => {            
              this.horarios = response.data;
              this.visible = true;
              this.fw = 1;

              PagSeguroDirectPayment.setSessionId(response.data.token);

              this.checkout_code = response.data.checkout_code;

              localStorage.setItem('checkoutCode', response.data.checkout_code);

              window.location.replace(process.env.VUE_APP_PAGSEGURO_URL + this.checkout_code);
              
              /*var test = PagSeguroDirectPayment.getPaymentMethods({
                  amount: 100.00,
                  success: function(response) {
                      
                  },
                  error: function(response) {
                      // Callback para chamadas que falharam.
                      console.log('falha');
                  },
                  complete: function(response) {
                      // Callback para todas chamadas.
                      this.cartao_creditos_options = response.paymentMethods.CREDIT_CARD.options;
                      this.boleto_options = response.paymentMethods.BOLETO;
                      this.debito_online_options = response.paymentMethods.ONLINE_DEBIT.options;

                      console.log('mounting', this.cartao_creditos_options);
                  }
              });

              console.log('test', test);*/

          }).catch((error) => {
            console.log(error)
          })
      },
    
    },
    
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
    padding: 40px 0;
  }

  p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
    font-weight: 500;
  }

  h3 {
    margin: 0 15px;
    font-size: 18px;
    text-align: left;
    font-weight: 700;
    
  }

  /* #v-date-picker {
     font-weight: bold;
  } */



</style>