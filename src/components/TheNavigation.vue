<template>
  <div>
    <v-app-bar app color='#ffff' :flat="flat"  :class="{ expand: flat }">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
      <router-link to="/">
        <v-img src="@/assets/img/LogoFinal.png" max-width="200px" />
      </router-link>
      <v-spacer />
         

      <router-link class="links" to="/">
        <v-btn color="Igor" fab x-small dark>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <div class="hidden-xs-only" v-for="especialidade in especialidades" :key="especialidade.name">
        <router-link :to="{
            name: 'pisicoDetails',
            params: { slug: especialidade.slug }
          }">
          <v-btn class="mx-2" rounded color="primary" dark>
            <h4>{{ especialidade.name }}</h4>
          </v-btn>
        </router-link>
      </div>
    
    </v-app-bar>

        <v-navigation-drawer v-model="drawer" app temporary dark src="">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/LogoFinal.png" alt="Logo" max-width="220px"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Clinica</v-list-item-title>
            <v-list-item-subtitle>Szeckir</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="especialidade in especialidades" :key="especialidade.name">
          <v-list-item-icon class="justify-center">
        
              <router-link :to="{
            name: 'pisicoDetails',
            params: { slug: especialidade.slug }
          }">
          <v-btn class="mx-2" rounded color="primary" dark x-small>
            <h4>{{ especialidade.name }}</h4>
          </v-btn>
        </router-link>
          </v-list-item-icon>
          <!-- <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              especialidade.name
            }}</v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     
  </div>
</template>

<script>
  import store from "@/store";
  export default {
    data() {
      return {
        especialidades: store.especialidades,
        drawer: null,
      isXs: false,        
      }
    },

       props: {
      color: String,
      flat: Boolean,
      text: String
    },
    methods: {
      onResize() {
        this.isXs = window.innerWidth < 850;
      },
    },

    watch: {
      isXs(value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false;
          }
        }
      },
    },
    mounted() {
      this.onResize();
      window.addEventListener("resize", this.onResize, {
        passive: true
      });
    },
  };
</script>

<style scoped>
  #nav a {
    color: #ffff;
    text-decoration: none;
    font-weight: bold;

  }


  .nav-links {
    display: flex;
    color: rgb(255, 255, 255);
  }

  .links {
    padding-right: 20px;
    list-style: none;
    color: #ffff;
  }

  .links:hover {
    text-decoration: underline;
  }


  .v-toolbar {
    transition: 0.6s;
  }

  .expand {
    height: 80px !important;
    padding-top: 10px;
  }
</style>