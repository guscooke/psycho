<template>
<div>
    <GoBack />
    <TheNavigation /> <!-- <v-parallax src="@/assets/img/xx.png" height="1080"> -->
<v-container grid-list-md  class="grey lighten-5 my-5 mt-6">
  <v-layout row wrap>
 

<!--   
      <v-row :align="align">
        <v-col class="col-md-3"> -->

          <v-flex xs12 sm6 md4 v-for="profissionai in profissionais.data" :key="profissionai.id" >

         <Card class="mt-6" :profile="profissionai" />

       
        </v-flex>
        <!-- </v-col>
        </v-row> -->
  
      <!-- <v-divider vertical></v-divider> -->
      <!-- </div> -->
      <!-- <v-col xs="12" md="6">

        <div class="pa-2">
          <v-card class=" mt-16 mb-12">
            <router-view 
          :key="$route.path"
            />
          </v-card>
        </div>

      </v-col> -->
  </v-layout>
  </v-container>
</div>
</template>

<script>
  import TheNavigation from "@/components/TheNavigation";
  // import store from "@/store";
  import GoBack from "@/components/GoBack";
  import axios from 'axios';
  import Card from "@/components/Cards";




  export default {
    components: {
      GoBack,
      TheNavigation,
      Card,
    },
    data() {
      return {
        profissionais: {},
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
  /* img {
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

  } */
</style>