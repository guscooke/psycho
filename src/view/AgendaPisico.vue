<template>
 <section id="hero2">
  <v-flex >
      <v-row  
      class="d-flex pa-12 sm12 md12 lg12" 
      align="center" 
      justify="center" 
      no-gutters
      align-md
      align-sm="center"
      align-lg>

        <v-col cols="10"
        md="10">  

         <div class="booking">
            <span class="go-back">
              <button @click="goBack">back</button>
            </span>
          
          <pisico />
         
         </div>

        </v-col>
      </v-row>

        
            
    <!-- <p>psicologo: {{ this.$route.params.id }}</p> -->
    </v-flex>
  </section>
</template>

<script>

import pisico from "../components/PisicoProfile";

  export default {
    components: {
      pisico
    },
    data(){
      return {
      // pisicologoId: this.$route.params.id
      }
    },
    methods: {
      goBack() {
        return this.$router.go(-1)
      }
    }
  };
  </script>

  <style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero2 {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}



.zoom-efect {
  transform: scale(1.2);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>