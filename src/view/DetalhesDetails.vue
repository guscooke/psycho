<template>
  <section>
    <GoBack />
    <TheNavigation />
    <v-container grid-list-md class="grey lighten-5 my-5 mt-6">
      <v-layout row wrap>
        <div class="profissionai-details">
          <h2>Especialista: {{ profissionaiId }}</h2>
        </div>
        <v-flex>
          <!-- <v-flex xs12 sm6 md4 v-for="profissionai in profissionais.data" :key="profissionai.id"> -->

          <span></span>

          <div class="text-center">
            <v-btn class="mt-8" rounded color="primary" dark>
              Agendar
            </v-btn>
          </div>
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

  export default {
    components: {
      TheNavigation,
      GoBack,
      Foote

    },
    props: ['profissionaiId'],

    data() {
      return {
        
      }
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
    justify-content: space-between;
    padding: 40px 0;
  }

  p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
  }
</style>