<template>
  <v-app> 
   
    <v-main class="pt-0">

     <router-view/>
     
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      > 
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>


 
</template>




<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>

import foote from "./components/Footer";



export default {
  name: "App",

  components: {
  
    foote,
  
  
  },

};
</script>
