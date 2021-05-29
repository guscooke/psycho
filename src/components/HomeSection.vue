<template>
  <section id="hero">
    <div class="bg">
      <v-parallax :src="require(`@/assets/img/bgx.jpg`)" height="800">
        <!-- <div class="centered-text"> -->
        <v-row class="centered-text d-flex pa-6" align="center" justify="center" no-gutters align-sm="center">
          <v-col cols="10" md="10">
            <v-row align="center" justify="center">
              <v-col cols="10" md="5" xl="5">
                <h1 class="display-3 font-weight-bold mb-10">
                  Clínica Szeckir
                </h1>
                <h1 class="font-weight-dark justify-center mt-4 mb-6">
                  Os sintomas que você vê são somente a ponta do Iceberg!
                </h1>
                <v-col>
                  <v-btn mt-4 rounded outlined large color="#03989E" @click="$vuetify.goTo('#especialidades')"
                    class="mt-4">
                    <h4>ESPECIALIDADES</h4>
                    <v-icon class="ml-2">mdi-arrow-down</v-icon>
                  </v-btn>
                </v-col>
              </v-col>


              <v-flex class=" cols hidden-xs-only sm6 md6">
                <v-col>
                  <v-row class="mt-6">
                    <v-img  :aspect-ratio="16/9"
      :width="width" src="@/assets/img/yyy.png" height="800" />
                  </v-row>
                </v-col>
              </v-flex>

            </v-row>
          </v-col>
        </v-row>
        <!-- </div> -->
      </v-parallax>
      <v-container fluid id="features" class="transt">
        <v-row align="center" justify="space-around">
          <v-col cols="10" sm="8" class="text-center">

            <h1 class="pa-4 font-weight display-1 mt-8 mb-6">Abordagens Terapêuticas</h1>
            <h3 class="font-weight mt-8 subtitle-0 text">
              A Psicoterapia não necessariamente precisa estar associada a uma doença. Ela é para todo mundo, por isso é
              importante avaliar as diferentes abordagens terapêuticas existentes.
              Em nossa clínica, os profissionais atuam em duas principais abordagens
            </h3>
            <h3 class="pa-4 font-weight display-0 mt-8 mb-8">TERAPIA COGNITIVO COMPORTAMENTAL <br> <br> TERAPIA
              PSICANALÍTICA
            </h3>

          <!-- WHATSAPP -->
              <a ref="float"
                href="https://api.whatsapp.com/send?phone=5511996888048&text=Olá, Seja bem vindo a Clínica Szeckir!"
                class="float">
                <v-icon large color="white">mdi-whatsapp</v-icon>
              </a>


            <!-- dialog -->
            <div class="text-center mt-5 mb-5">

              <v-row justify="center">
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ on, attrs }">

                    <i class="beacon" />
                    <i class="before" />
                    <v-btn class="mt-6 mb-6 mx-4" small rounded color="primary" dark v-bind="attrs" v-on="on">
                      <h5>Cognitiva</h5>
                    </v-btn>



                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline justify-center">Terapia Cognitiva Comportamental</span>
                    </v-card-title>
                    <v-card-text class="font-weight display-0 text-justify">
                      <p>
                        Fundada em 1960 por Aron Beck e Terapia Cognitiva Comportamental é clara e direta. Está
                        baseada
                        no
                        entendimento do paciente quanto a seus pensamentos, emoções e sentimentos sobre seu
                        desconforto,
                        dor, tristeza ou qualquer sensação negativa sobre si e sua vida.
                        Através de técnicas e exercícios, tem como objetivo identificar padrões de comportamento,
                        crenças,
                        pensamentos e hábitos que estão relacionados a origem do problema e modificar para percepções
                        positivas.
                        Trabalha no auxilio de diversos transtornos e doenças mentais, bem como em diferentes questões
                        da
                        vida como um todo como: dificuldades de relacionamento interpessoal, separações, depressão,
                        estresse, ansiedade, dificuldades com escolha profissional, luto, dificuldades de
                        aprendizagem,
                        entre outros.</p>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="" color="dark" text @click="dialog = false">
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- SECOND DIALOG -->
                <v-dialog v-model="dialog1" width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mt-6 mb-6 mx-4" small rounded color="primary" dark v-bind="attrs" v-on="on">
                      <h5>Psicanalítica</h5>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Terapia Psicanalítica</span>
                    </v-card-title>
                    <v-card-text class="font-weight display-0 text-justify">
                      <p>
                        Fundada por Sigmund Freud é normalmente chamada por “análise”, constitui-se pela escuta do
                        paciente como processo fundamental de cura. É mais profunda e tem como objetivo a
                        transformação
                        da
                        personalidade do paciente como um todo. Busca inserir o paciente em seu meio e é um espaço
                        essencial para o crescimento pessoal interno e enfrentamento do pensamento afetivo. É uma
                        abordagem que visa um entendimento extremamente profundo de si mesmo, buscando através da
                        escuta,
                        as principais palavras, expressões e entendimento sobre seus conflitos.
                        É indicada tanto para entendimento de pensamentos e incômodos, busca conhecimento interno e
                        diversas situações específicas como depressão, ansiedade, medo, perdas e demais conflitos.</p>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class=" " color="dark" text @click="dialog1 = false">
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </div>
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
        dialog: false,
        dialog1: false


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
    color: #037682;


  }



  .transt {
    background-color: #037682;
    color: #ffff
  }



  .float {
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 100px;
    left: 60px;
    background-color: #03989E;
    border-radius: 50px;

    font-size: 30px;
    box-shadow: 1px 2px 2px #999;
    z-index: 100;
  }

  .my-float {
    margin-top: 16px;
  }

  .branco {
    color: "white"
  }

  .beacon {
    position: absolute;
    top: 96%;
    left: 50%;
    height: 3em;
    width: 3em;
    border-radius: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
  }

  .beacon:before {
    position: absolute;
    content: "";
    height: 3em;
    width: 3em;
    left: 0;
    top: 0;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 2px #d3d8db;
    -webkit-animation: active 1s infinite linear;
    animation: active 2s infinite linear;
  }

  @-webkit-keyframes active {
    0% {
      -webkit-transform: scale(.5);
      opacity: 1;
    }

    70% {
      -webkit-transform: scale(5.5);
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  section {
    position: relative;
  }
</style>