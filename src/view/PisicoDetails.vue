<template>
  <!-- <v-parallax src="@/assets/img/xx.png" height="1080"> -->

  <v-container class="grey lighten-5">
    <GoBack />
    <TheNavigation />

    <v-row no gutters class="card-details">
      <v-col xs="12" md="4" justify="center">

        <div class="pa-8">


          <div v-for="profissionai in profissionais.data" :key="profissionai.id" class="card mt-16 mb-12"
            justify="space-around">
            <h3 class="mt-4">{{ profissionai.nome }} {{ profissionai.sobrenome }}</h3>
            <p>{{ profissionai.descricao }}</p>
            <router-link :to="{
                    name: 'DetalhesDetails',
                    params: { profissionaiId: profissionai.id },

                    //-- hash: '#profissional' -->
                  }"> 
              <img :src="require(`@/assets/img/doutora.jpg`)" />

            </router-link>
            <p>{{ profissionai.tipo }}</p>
          </div>
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <!-- </div> -->
      <v-col xs="12" md="6">

        <div class="pa-2">
          <v-card class=" mt-16 mb-12">
            <router-view 
          :key="$route.path"
            />
          </v-card>
        </div>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import TheNavigation from "@/components/TheNavigation";
  // import store from "@/store";
  import GoBack from "@/components/GoBack";
  import axios from 'axios';




  export default {
    components: {
      GoBack,
      TheNavigation

    },
    data() {
      return {
        profissionais: {},
      }
    },

    props: {
  
      profissionaiId: {
        type: String,
        required: true
      }
    },
    methods: {
      async getProfissionais() {
        console.log('hello')
        const response = await axios.get('http://localhost:5000/profissionais');
        this.profissionais = response.data;
        console.log(this.profissionais);

      }
    },
    created: function () {
      this.getProfissionais();
    },
        computed: {

      profissionai() {
        return this.data.profissionais.find(
          profissionai => profissionai.id === this.profissionaiId
        )
      }

    },
   
  };
</script>

<style>
  img {
    width: 60%;
    height: 40%;
    border: 3px solid rgb(255, 255, 255);

    position: absolute;
    top: -30px;
    right: 60px;
    border-radius: 10%;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.5);



  }


  p {
    margin: 0 100px;
    font-size: 20px;
    text-align: center;
    display: flex;

  }

  .card-details {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }

  .card {


    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
    max-width: 300px;

    position: relative;
    padding: 80px 0;

  }
</style>