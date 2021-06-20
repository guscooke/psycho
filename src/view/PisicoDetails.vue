<template>
  <div>
    <GoBack />
    <TheNavigation />
    <v-container grid-list-md class="grey lighten-5 my-5 mt-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="profissionai in profissionais.data" :key="profissionai.id">
          <h3 class="mt-3">{{ profissionai.tipo }}</h3>
          <router-link :to="{
                    name: 'DetalhesDetails',
                    params: { profissionalNome: profissionai.nome, profissionalId: profissionai.id, profissionalTipo: profissionai.tipo },
                    //-- hash: '#profissional' -->
                  }">
            <Card class="mt-6" :profile="profissionai" />            
          </router-link>
        </v-flex>
        <!-- <router-view :key="$route.path" /> -->
      </v-layout>      
    </v-container>
    <Foote />
  </div>
</template>

<script>
  import TheNavigation from "@/components/TheNavigation";
  import Foote from "@/components/Footer";

  // import store from "@/store";
  import GoBack from "@/components/GoBack";
  import axios from 'axios';
  import Card from "@/components/Cards";


  export default {
    components: {
      GoBack,
      TheNavigation,
      Card,
      Foote
    },
    data() {
      return {
        profissionais: {},
      }
    },

    methods: {
      async getProfissionais() {
        console.log(this.$route.params.slug);
        const response = await axios.get('http://localhost:5000/profissionais/especialidade/' + this.$route.params.slug);
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

</style>