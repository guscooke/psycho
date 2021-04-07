<template>
  <!-- <v-parallax src="@/assets/img/xx.png" height="1080"> -->
  <section id="hero"> 
    <v-toolbar
      color="#06252e"
      dense 
      fixed
    >
      <GoBack />
      <TheNavigation />
    </v-toolbar>
        <!-- <div class="centered-text"> -->
      <div class=".destination-details">
      <v-card
      class="d-flex flex-wrap pa-2 rounded-card"
      outlined
      tile
      >
        <v-row  
        align="center" 
        justify="center" 
        no-gutters
        >
      <v-col cols="12" md="12" xl="3">
        <section class="experiences">
          <p>sobre {{ destination.name }}</p>
            <div class="cards" id="experience">
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
                      cols="12" md="12" xl="3">
                      <v-card
                      class="rounded-card dd-sm-inline-flex pa-2"
                      outlined
                      tile
                      elevation="13">
                        <img
                          :src="require(`@/assets/img/${experience.image}`)"
                          :alt="destination.name"
                        />
                        </v-card>
                      </v-col>
                   <span class="card__text">
                </span>
              </router-link>
            </div> 
         <v-row  
          class="d-flex pa-0" 
          >
        <v-col cols="12" md="12" xl="3">
        <v-card
        class="rounded-card d-sm-inline-flex pa-2"
        outlined
        tile
        elevation="13">
              <v-date-picker
              v-model="picker"
              :landscape="landscape"
              locale="pt-BR">
      </v-date-picker>
    </v-card>
  </v-col>
</v-row>
  <v-row  
    class="d-flex pa-2" 
  >
     <v-col cols="12" md="12" xl="3">
        <v-card
        class="rounded-card d-sm-inline-flex pa-2"
                      outlined
                      tile
                      elevation="13">
          <v-chip-group
            
            active-class="deep-purple accent-4 white--text"
            column
          >
                        <v-chip>11:30am</v-chip>

                        <v-chip>13:30PM</v-chip>

                        <v-chip>5:30PM</v-chip>

                        <v-chip>7:30PM</v-chip>

                        <v-chip>8:00PM</v-chip>

                        <v-chip>9:00PM</v-chip>

                      
                      </v-chip-group>
                    </v-card>
                 </v-col>
               </v-row>
             <div>  
        </div>
      </div>
    <router-view :key="$route.path" />
  </section>
  <section>
    <v-card>
      </v-card>
      </section>
        </v-col>
        </v-row>
          </v-card>
          </div>
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
    picker () {
      console.log()
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

.rounded-card{
    border-radius:50px;
}

#hero {
  z-index: 0;
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
  padding: 40px 0;
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
  display: flex;
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
