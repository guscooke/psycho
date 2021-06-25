<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark src="">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/LogoFinal.png" alt="Logo" max-width="220px"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Clínica</v-list-item-title>
            <v-list-item-subtitle>Szeckir</v-list-item-subtitle>
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
      <div v-for="especialidade in especialidades" :key="especialidade.name">

        <router-link :to="{
            name: 'pisicoDetails',
            params: { slug: especialidade.slug }
          }">
          <h4 class="links">{{ especialidade.name }}</h4>
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