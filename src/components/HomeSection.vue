<template>
  <section id="hero">  
    <v-parallax dark src="@/assets/img/xx.png" height="780">
      <vue-particles color="#dedede"></vue-particles>
        <div class="centered-text">
      
      <v-row  
      class="d-flex pa-2" 
      align="center" 
      justify="center" 
      no-gutters
      align-md
      align-sm="center"
      align-lg>
        
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

              <v-flex sm12 md6>
                <v-col cols="12" >
                  <v-row cols="6" >
                    <!-- <kinesis-container> -->
            <!-- <kinesis-element
               :strength="50"
            
            > -->
            
                <v-img  src="@/assets/img/yyy.png" height="800"/>
           
            <!-- </kinesis-element>
                    </kinesis-container> -->
              </v-row>
             
            </v-col> 
              </v-flex>
            <v-col cols="12" md="6" xl="4" class="hidden-md-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row></div>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
        
     
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                .
              </h1>
            </v-col> -->
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
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube
          :video-id="videoId"
          @ready="ready"
          @playing="playing"
        ></youtube>
      </v-card>
    </v-dialog>
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
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  // methods: {
  //   ready(event) {
  //     this.player = event.target;
  //   },
  //   playing(event) {
  //     // The player is playing a video.
  //   },
  //   change() {
  //     // when you change the value, the player will also change.
  //     // If you would like to change `playerVars`, please change it before you change `videoId`.
  //     // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
  //     // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
  //     this.videoId = "another video id";
  //   },
  //   stop() {
  //     this.player.stopVideo();
  //   },
  //   pause() {
  //     this.player.pauseVideo();
  //   },
  
};
</script>

<style lang="scss" scoped>

.particles-js {
  height: 1vh;
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

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

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
