<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
             <h1 class="pa-6 font-weight display-1 mb-3 mt-6" justify="center">
                Entenda como funciona!
              </h1>
              <h3 class="font-weight mb-4" justify="center">No nosso serviço de telemedicina, você pode realizar a sua consulta com a
                especialidade desejada via
                chamada de vídeo. </h3>
              <br>
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <!-- <h1 class="font-weight-light display-2">la balb</h1> -->
           
              <h3 class="pa-8" justify="center">Para agendar a sua primeira consulta é bem simples: </h3>
              <v-row>
                <v-col cols="12" class="pa-6 d-flex align-center">
                  <v-img src="@/assets/img/one.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    1º - Em especialidades escolha a opção desejada e clique para ver os profissionais.
                  </h4>
                </v-col>
                <v-col cols="12" class="pa-6 d-flex align-center">
                  <v-img src="@/assets/img/peace.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    2º - Ao escolher o profissional desejado, basta selecionar dia e horário. </h4>
                </v-col>
                <v-col cols="12" class="pa-6 d-flex align-center">
                  <v-img src="@/assets/img/three.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    3º - Pague o seu agendamento, de forma simples e rápida! E pronto, sua consulta está reservada.
                  </h4>

                </v-col>
                <v-col cols="12" class="mb-6 pa-6 d-flex align-center">
                  <v-img src="@/assets/img/four.png" max-width="60px" class="mr-4" />
                  <h4 class="text-justify">
                    4º - Receba seu acesso e instruções por e-mail. No dia e hora marcada, basta acessar o link enviado
                    por e-mail e aguardar a sua consulta.

                  </h4>

                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
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
    background-color: #ffff;

  }
</style>