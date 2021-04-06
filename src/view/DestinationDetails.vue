<template>
  <!-- <v-parallax src="@/assets/img/xx.png" height="1080"> -->
  <section id="hero"> 
      <v-toolbar
      color="03989E"
      dense 
      fixed
      >
    <GoBack />
    <TheNavigation />
      </v-toolbar>
        <!-- <div class="centered-text"> -->
    <div>
    <v-row  
      class="d-flex pa-2" 
      align="center" 
      justify="center" 
      no-gutters
      align-sm="center"
      >
    <section>
     <v-card
        cols="6"
        md="12"
           >
          <div class="destination-details">
           <p>sobre {{ destination.name }}</p>
          </div>
      
      </v-card>
    </section> 
    
    <section class="experiences">
      <v-card>
      <!-- <h2>Sobre {{ destination.name }}</h2> -->
      <div class="cards" id="experience">
              <v-date-picker
              v-model="picker"
              :landscape="landscape"
              locale="pt-BR">
              </v-date-picker>
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }">
             <v-col
              cols="12"
              md="12">
              <v-card
              elevation="13">
            <img
              :src="require(`@/assets/img/${experience.image}`)"
              :alt="destination.name"
            /></v-card>
             </v-col>
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      
        <router-view :key="$route.path" />
      </v-card>
    </section>
    <section>
           <v-card>
      <!-- <h2>Sobre {{ destination.name }}</h2> -->
      <!-- <div class="cards" id="experience">

        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }">
             <v-col
              cols="12"
              md="12">
              <v-card>
            <img
              :src="require(`@/assets/img/${experience.image}`)"
              :alt="destination.name"
            /></v-card>
             </v-col>
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div> -->
          <!-- <v-col
                cols="12"
                md="3"
              >
            <v-row align="center">
              <v-date-picker
              v-model="picker"
              :landscape="landscape"
              locale="pt-BR">
              </v-date-picker>
            </v-row>
          </v-col> -->
        <!-- <router-view :key="$route.path" /> -->
      </v-card>
    </section></v-row>
    </div>
    
    <!-- </div> -->
        <!-- </v-parallax>       -->
  </section>
</template>    

<script>

import TheNavigation from "@/components/TheNavigation";
import store from "@/store";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack,
    TheNavigation
  },
data () {
      return {
        picker: new Date().toISOString().substr(0, 7),
        landscape: true,
      }
    },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>

<style>
  .particles-js {
  height: 1vh;
}

#hero {
  z-index: 0;
}

.rounded-card{
    border-radius:50px;
}
img {
  max-width: 400px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.experiences {
  padding: 40px 0;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
  display: flex;
}
.cards {
  display: flex;
  justify-content: space;
}
.cards img {
  max-height: 400px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #03989E;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
section {
  position: relative;
}
</style>
