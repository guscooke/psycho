<template>
  <section fluid  fluidclass="fill-height mt-6 mb-6" id="especialidades">
    <div class="home">
      <h1 class="dark--text font-weight-bold display-1 mt-6 mb-6">
        Especialidades
      </h1>
      <v-container fluid id="features" class="mt-2 mb-6">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="space-around">
              <v-col cols="12" sm="4" v-for="especialidade in especialidades" :key="especialidade.name">
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? 20 : 3" outlined>
                    <v-col class="ml-auto">
                    <h2 class="mt-6">{{ especialidade.name }}</h2>
                    <router-link :to="{
                            name: 'pisicoDetails',
                            params: { slug: especialidade.slug }
                          }">
                          <v-col >
                      <v-img  :src="require(`@/assets/img/${especialidade.image}`)" :alt="especialidade.name"
                       max-height="300"
                        max-width="310" 
                        class="mx-auto"
                        />
                          </v-col>

                      <v-btn class="mt-6 mb-6" rounded color="primary" dark>
                        <h4>Ver Profissionais</h4>
                      </v-btn>
                    </router-link>
                    </v-col>
                  </v-card>
                </v-hover>
                <!-- </v-hover> -->
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {

  components: {},
  data() {
    return {
      especialidades: store.especialidades
    };
  }
};
</script>

<style scoped>

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

</style>