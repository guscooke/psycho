<template>
  <v-app>
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </v-main>
    <!-- <foote /> -->
  </v-app>
</template>

<script>
  // import foote from "./components/Footer";
  export default {
    name: "App",
    components: {
      // foote,
    },
     mounted() {
    console.log(process.env.VUE_APP_ROOT_API)
  },
  
    //   },
    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
  };
</script>

<style scoped>
  v-main {
    /* background-image: url("~@/assets/img/bgMain.png"); */
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  #app {
    font-family: "Montserrat", Helvetica, Arial, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #037682;

  }


</style>