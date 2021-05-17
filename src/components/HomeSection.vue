<template>
  <section id="hero">
    <div class="bg">
      <v-parallax :src="require(`@/assets/img/bgx.jpg`)" height="980">
        <div class="centered-text">
          <v-row class="d-flex pa-6" align="center" justify="center" no-gutters align-sm="center">
            <v-col cols="10" md="10">
              <v-row align="center" justify="center">
                <v-col cols="10" md="5" xl="5">
                  <h1 class="display-3 font-weight-bold mb-10">
                    Clínica Szeckir
                  </h1>
                  <h1 class="font-weight-dark justify mb-5">
                    Os sintomas que você vê são somente a ponta do Iceberg!
                  </h1>
                  <v-col>
                    <v-btn mt-4 rounded outlined large color="#03989E" @click="$vuetify.goTo('#features')" class="mt-4">
                      <h4>ESPECIALIDADES</h4>
                      <v-icon class="ml-2">mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-col>
                </v-col>

                <v-flex class="hidden-md-sm-and-down" sm12 md6>
                  <v-col>
                    <v-row cols="6">
                      <v-img src="@/assets/img/yyy.png" height="800" />
                    </v-row>
                  </v-col>
                </v-flex>

              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-parallax>
      <v-container fluid id="features" class="transt">
        <v-row align="center" justify="space-around">
          <v-col cols="10" sm="8" class="text-center">


            <!-- <v-img :src="feature.img" max-width="100px" class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }">
                    </v-img> -->
            <h1 class="pa-4 font-weight display-1 mt-8 mb-6">Transtornos</h1>
            <h3 class="font-weight mt-8 subtitle-0">
              A Psicoterapia não necessariamente precisa estar associada a uma doença. Ela é para todo mundo, por isso é
              importante avaliar as diferentes abordagens terapêuticas existentes.
              Em nossa clínica, os profissionais atuam em duas principais abordagens
            </h3>
            <h1 class="pa-4 font-weight display-0 mt-8 mb-8">TERAPIA COGNITIVO COMPORTAMENTAL e TERAPIA PSICANALÍTICA
            </h1>


          </v-col>
        </v-row>

      </v-container>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
  };
</script>
<style>
  .bg {
    z-index: 0;
  }
</style>
<style lang="scss" scoped>
  .centered-text {
    color: #037682,

    ;
    position: absolute;
    text-align: center;
    top: 10%;
    width: 100%;
  }

  .card {
    min-height: 300px;
    padding: 10px;
    transition: 0.5s ease-out;
  }

  .card .v-image {
    margin-bottom: 15px;
    transition: 0.75s;
  }

  .card h1 {
    margin-bottom: 10px;
  }

  .zoom-efect {
    transform: scale(1.1);
  }

  .up {
    transform: translateY(-20px);
    transition: 0.5s ease-out;
  }

  .transt {
    background-color: #037682;
    color: #ffff
  }

  section {
    position: relative;
  }
</style>