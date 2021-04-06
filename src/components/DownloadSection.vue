<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
            <kinesis-container>
            <kinesis-element
             :strength="50"
              :distance="100"
            >
              <v-img src="@/assets/img/psyco.png" class="d-block ml-auto mr-auto" max-width="2000"
             />
                 </Kinesis-element>
          </Kinesis-container>
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="dark--text font-weight-bold display-2 mb-2">Os sintomas que você vê são somente a ponta do Iceberg!</h1>
                <h1 class="font-weight-light">
                  Você não desconfia de que exista uma causa real para seus problemas existirem? É claro que existe! E ela está dentro do seu subconsciente, juntamente com suas crenças e suas emoções.
                  A falta de aprofundamento envolvendo o subconsciente é....
                </h1>
              <v-btn rounded outlined href="https://github.com/Joabsonlg/Landing-Page" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-book
                </v-icon>
                Agende sua Consulta
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/iceberg4.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 700px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>

<script>
import Vue from 'vue'
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'
  Vue.component('kinesis-container', KinesisContainer)
  Vue.component('kinesis-element', KinesisElement)
export default {
  
}
</script>