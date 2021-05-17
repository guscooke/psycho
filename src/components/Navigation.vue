<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark src="">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/LogoFinal.png" alt="Logo" max-width="250px"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Clinica</v-list-item-title>
            <v-list-item-subtitle>Szerckir</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color='#ffff' :flat="flat" light class="px-15" :class="{ expand: flat }">
      <v-toolbar-title>
        <v-img src="@/assets/img/LogoFinal.png" max-width="250px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
      <div v-else>
        <v-btn text dark @click="$vuetify.goTo('#hero')">
          <h4 class="mr-2">Home</h4>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <h4 class="mr-2">Como Funciona</h4>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <h4 class="mr-2">Sobre Nós</h4>
        </v-btn>

        <v-btn text @click="$vuetify.goTo('#especialidades')">
          <h4 class="mr-2">Especialidades</h4>
        </v-btn>
        <!-- <v-btn text @click="$vuetify.goTo('#especialidades')">
          <h4 class="mr-2">Sobre Nós</h4>
        </v-btn> -->
        <v-btn rounded text @click="$vuetify.goTo('#contact')">
          <h4 class="mr-2">Fale Com a Gente</h4>
        </v-btn>
        <!-- <v-btn rounded outlined text @click="$vuetify.goTo('')">
          <h5 center class="mr-2">Entre</h5>
        </v-btn> -->
        <router-link class="links" to="/login">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-btn>
        </router-link>

      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
  .v-toolbar {
    transition: 0.6s;
  }

  .expand {
    height: 80px !important;
    padding-top: 10px;
  }
</style>

<script>
  export default {
    data: () => ({
      drawer: null,
      isXs: false,
      items: [
        ["mdi-home-outline", "Home", "#hero"],
        ["mdi-information-outline", "Como Funciona", "#about"],
        ["mdi-download-box-outline", "Sobre Nós", "#download"],
        ["mdi-currency-usd", "Especialidades", "#especialidades"],
        ["mdi-email-outline", "Contatos", "#contact"],
        ["mdi-account-circle", "Entrar", "#"],
      ],
    }),
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