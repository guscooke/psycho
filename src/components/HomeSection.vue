<template>
  <section id="hero">
    <div class="bg">
      <v-parallax :src="require(`@/assets/img/bgx.jpg`)" height="800">
        <div class="centered-text">
          <v-row class="d-flex pa-11" align="center" justify="center" no-gutters align-sm="center">
            <v-col cols="10" md="10">
              <v-row align="center" justify="center">
                <v-col cols="10" md="5" xl="6">
                  <h1 class="col-10 display-3 font-weight-bold mb-6">
                    Clínica Szercky
                  </h1>
                  <h1 class="font-weight-dark col-11 justify">
                    Os sintomas que você vê são somente a ponta do Iceberg!
                  </h1>
                    <v-col cols="10">
                  <v-btn  rounded outlined large color="#03989E" @click="$vuetify.goTo('#features')" class="mt-4">
                    <h4>Nossa Equipe</h4>
                    <v-icon class="ml-2">mdi-arrow-down</v-icon>
                  </v-btn>
                </v-col>
                </v-col>

                <v-flex class="hidden-md-sm-and-down" sm12 md6 >
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
      <v-container fluid id="features" class="mt-2">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="space-around">
              <v-col cols="12" sm="4" class="text-center" v-for="(feature, i) in features" :key="i">
                <v-hover v-slot:default="{ hover }">
                  <v-card shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                    <v-img :src="feature.img" max-width="100px" class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }">
                    </v-img>
                    <h1 class="font-weight">{{ feature.title }}</h1>
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: require("@/assets/img/ansiedade.png"),
          title: "Ansiedade",
          text:
            "Com a ansiedade surge a constante preocupação com o futuro e a falta de segurança e autoconfiança.",
        },
        {
          img: require("@/assets/img/panic-attack.png"),
          title: "Sindrome do Pânico",
          text:
            "Tratar a causa dos gatilhos que acionam as crises de pânico é o que trará controle emocional em momentos difíceis.",
        },
        {
          img: require("@/assets/img/depression.png"),
          title: "Depressão",
          text:
            "A depressão é a responsável por alterações no cérebro que afetam drasticamente as emoções e a qualidade de vida.",
        },
      ],
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
  color: #03989e;
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

section {
  position: relative;
}
</style>
