<template>
  <v-app>
    <v-main class="pt-0">
      <navigation :color="color" :flat="flat" />
      <home />
      <about />
      <quemsomos />
      <profi />
      <contact />
      <foote />
    </v-main>
    <v-scale-transition>
      <v-btn fab v-show="fab" v-scroll="onScroll" dark fixed bottom right color="primary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

  </v-app>
</template>

<script>
  import home from "../components/HomeSection";
  import about from "../components/AboutSection";
  import quemsomos from "../components/QuemSomos";
  import profi from "../components/Profissionais";
  import contact from "../components/ContactSection";
  import navigation from "../components/Navigation";
  import foote from "../components/Footer";



  export default {
    name: "App",

    components: {
      navigation,
      home,
      about,
      quemsomos,
      profi,
      contact,
      foote
    },

    data: () => ({
      fab: null,
      color: "",
      flat: null,
    }),


    created() {
      const top = window.pageYOffset || 0;
      if (top <= 60) {
        this.color = "#03989E";

        this.flat = true;
      }
    },

    watch: {
      fab(value) {
        if (value) {

          this.color = "#03989E" ;
          this.flat = false;
        } else {
          this.color = "#03989E";
          this.flat = true;
        }
      },
    },



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