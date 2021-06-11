<template>
  <section>
    <GoBack />
    <TheNavigation />
    <v-container grid-list-md class="grey lighten-5 my-5 mt-6">
      <v-layout row wrap>
        <div class="profissionai-details">
          <h2>Especialista: {{ profissionaiId }}</h2>
          <v-avatar>
          <img src="@/assets/img/doutora.jpg" size="128">
          </v-avatar>
        </div>
        <v-flex>
          <!-- <v-flex xs12 sm6 md4 v-for="profissionai in profissionais.data" :key="profissionai.id"> -->

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
                locale="pt-br"
                class="mt-3"
                style="margin: 30px 0;"
              >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                Buscar
                </v-btn>
              </v-date-picker>
           
             
            <v-btn color="primary" @click.native="fw = 2"><strong>Continuar</strong></v-btn>
            <v-btn text>Cancelar</v-btn>


          </v-stepper-content>
          <v-stepper-step :complete="fw > 2" step="2">
           <strong> Horário</strong>
            <small>Selecione o Horário Desejado</small>
          </v-stepper-step>
          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-5" height="200px">
            aqui vão os Horarios



            </v-card>
            <v-btn color="primary" @click.native="fw = 3"><strong>Continuar</strong></v-btn>
            <v-btn text>Cancelar</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="fw > 3" step="3">
            <strong>Seus dados</strong></v-stepper-step>
          <v-stepper-content step="3">
            <v-card  class="mb-5" height="350px">

              <Form />

            </v-card>
            <v-btn color="primary" @click.native="fw = 4"><strong>Continuar</strong></v-btn>
            <v-btn text>Cancelar</v-btn>
          </v-stepper-content>
          <v-stepper-step step="4">
            <strong>Confirmação do seu Agendamento</strong>

            </v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px">
              
            confirmação


            </v-card>

            <v-btn color="primary" @click.native="fw = 1"><strong>Continuar</strong></v-btn>
            <v-btn text>Cancelar</v-btn>
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
  </section>

</template>
<script>
  import TheNavigation from "@/components/TheNavigation";
  // import store from "@/store";
  import GoBack from "@/components/GoBack";
  import Foote from "@/components/Footer";
  import Form from "@/components/Form";
  export default {
    components: {
      TheNavigation,
      GoBack,
      Foote,
      Form

    },
    props: ['profissionaiId'],
    agendamento: [],
    

    data() {
      return {
        fw: 1,
        rw: 1,
        
      selected_date: '',
       
      }
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