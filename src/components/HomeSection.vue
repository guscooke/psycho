<template>
  <section class="BG" id="hero">  
    <v-parallax dark src="" height="780">
      <vue-particles color="#dedede"></vue-particles>
        <div class="centered-text"> 
          <v-row  
          class="d-flex pa-2" 
          align="center" 
          justify="center" 
          no-gutters
          align-sm="center"
        >
        
        <v-col cols="10"
        md="10">    
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="6">
              <h1 class=" display-3 font-weight-bold mb-4">Dr Phsyco</h1>
                <h1 class="font-weight-dark col-12 justify">
                  Norman Bates está esperando por você no Motel mais famoso do mundo,
                  escolha o profissional ideal e receba muitas facadas ao final.
                </h1>
                  <v-btn
                    rounded
                    outlined
                    large
                    dark
                    @click="$vuetify.goTo('#features')"
                    class="mt-5"
                  > Saiba mais
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
                </v-btn>  
            </v-col>
            <v-col class=" hidden-sm-and-down" cols="12" md="6" xl="12" sm="6" >
                  
                <v-img   src="@/assets/img/yyy.png" height="800"/>
           
            </v-col> 
 
            <v-col cols="12" md="6" xl="4" class="hidden-md-sm-and-down"> </v-col>
          </v-row>
        </v-col>
        
      </v-row></div>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
        
     
    </v-parallax>
    
    <v-container fluid id="features" class="mt-2 BG1">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h3 class="font-weight-light display-1">O que você sente ?</h3>
              <h1 class="font-weight-light">
                .
              </h1>
            </v-col>
            
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
 
 
    <div class="svg-border-waves hidden-sm-only">
      <img src="~@/assets/img/wave2.svg" />
    </div>

  </section> 
</template>

<script>
  import Vue from 'vue'
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'
  Vue.component('kinesis-container', KinesisContainer)
  Vue.component('kinesis-element', KinesisElement)
export default {
  data() {
    return {
     
      features: [
        {
          img: require("@/assets/img/ansiedade.png"),
          title: "Ansiedade",
          text: "Com a ansiedade surge a constante preocupação com o futuro e a falta de segurança e autoconfiança.",
        },
        {
          img: require("@/assets/img/panic-attack.png"),
          title: "Sindrome do Pânico",
          text: "Tratar a causa dos gatilhos que acionam as crises de pânico é o que trará controle emocional em momentos difíceis.",
        },
        {
          img: require("@/assets/img/depression.png"),
          title: "Depressão",
          text: "A depressão é a responsável por alterações no cérebro que afetam drasticamente as emoções e a qualidade de vida.",
        },
      ],
    };
  },
 
  
};
</script>

<style lang="scss" scoped>

.particles-js {
  height: 1vh;
}
.BG {
background-color: #06252e;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%2307323d' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%2307404c' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23074f5b' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23075f6b' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%2306717c' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%2305848d' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%2303989e' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
.BG1 {
  background-color: #f4f7f5;
}

.centered-text {
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 10%;
  width: 100%;
}
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}


</style>

<style>


.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
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
</style>

<style>
section {
  position: relative;
  
}
</style>
