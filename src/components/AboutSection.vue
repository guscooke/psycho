<template>
  <section id="about">
    <v-container  fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <!-- <h1 class="font-weight-light display-2">la balb</h1> -->
              <h1 class="pa-4 font-weight display-1 mb-3">
                Entenda como funciona!
              </h1>
              <h3>No nosso serviço de telemedicina, você pode realizar a sua consulta com a especialidade desejada via
                chamada de vídeo. </h3>
              <br>
              <h4 class="pa-4">Para agendar a sua primeira consulta é bem simples: </h4>
              <v-row>
                <v-col cols="12" class="pa-6 d-flex align-center">
                  <v-img src="@/assets/img/one.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    1º Em profissionais, escolha a especialidade e profissional
                  </h4>
                </v-col>
                <v-col cols="12" class="pa-6 d-flex align-center">
                  <v-img src="@/assets/img/peace.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    2º Escolha a melhor opção de dia e horário para você.
                  </h4>
                </v-col>
                <v-col cols="12" class="pa-6 d-flex align-center">
                  <v-img src="@/assets/img/three.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    3º Pague sua consulta online, de forma fácil e rápida! E seu horário está garantido!
                  </h4>

                </v-col>
                <v-col cols="12" class="mb-6 pa-6 d-flex align-center">
                  <v-img src="@/assets/img/four.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    4º Receba seu acesso por e-mail. No dia e hora marcada, basta acessar o link enviado por e-mail e
                    aguardar o médico.
                  </h4>

                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5"  class="d-none d-md-flex">
              <v-img src="@/assets/img/video.png" class="d-block ml-auto mr-auto" max-width="400px" />

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
  #about {
    background-color: #f4f7f5;
 
  }
</style>