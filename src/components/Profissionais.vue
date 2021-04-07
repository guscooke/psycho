<template>
  <section id="pricing" class="pa-2">
     
      <v-container fluid id="features" class="mt-4">   
        <v-row align="center" justify="space-around">
          <v-col
         
            cols="6"
            md="3" 
          >
            <h1 class=" font-weight-Bold display-1 mb-12 " >
                      Nossos Terapeutas      
              </h1 > 
                <p class= "hidden-sm-and-down">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum.web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                   </v-col>
                <v-col 
                  cols="6"
                  sm="3"
                  class="text-center"
                  v-for="destination in destinations"
                  :key="destination.name"> 
                 
                    <v-hover v-slot:default="{ hover }">
                     
                      <v-card
                          class="rounded-card"
                          max-width="300"
                          
                          :key="destination.slug"
                          :elevation="hover ? 19 : 1"
                          :class="{ up: hover }">
               
                      
                
                        
                        <v-img
                          src="@/assets/img/Sla2.svg"
                        >              
                        <v-avatar 
                        size="150"
                          >
                     <v-img 
                      
                        :src="require(`@/assets/img/${destination.image}`)"
                        :alt="destination.name"/>
                  </v-avatar> 
                  <v-card-title class="white--text">{{ destination.name}}</v-card-title>
                          <v-card-text
                            class="title amber--text pl-3">
                            <v-card-title>{{ destination.title}}</v-card-title>
                              <v-row
                                align="center"
                                class="mx-0"
                              >
                                <!-- <v-rating
                                  :value="4.5"
                                  color="amber"
                                  dense
                                  half-increments
                                  readonly
                                  size="14"
                                ></v-rating> -->

                              <!-- <div class="white--text ml-4">
                                4.5 (413)
                              </div> -->
                            </v-row>
                          <div class="my-4 subtitle-0 dark--text">
                            {{ destination.subtitle }}
                          </div>
                         <div class="hidden-sm-and-down white--text">{{ destination.text2 }} </div>
                        </v-card-text>
                      
                      <v-card-text>

                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
               <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="black"
          >
           <router-link
              :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
                                                }">
              <v-btn
              elevation="24"
              raised>clique aqui</v-btn>
         
           </router-link>
          </v-overlay>
        </v-fade-transition>
     
                    </v-img> 
                    
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          <!-- </v-col> -->
        <!-- </v-row> -->
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 144.54 17.34"
                    preserveAspectRatio="none"
                    fill="white"
           >
              <path
                d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
              />
          </svg>
    </v-container>
  </section>
</template>
<script>

import store from "@/store.js";
export default {
  components: {
  
  },
  name: "home2",
  data() {
    return {
      destinations: store.destinations
    };
  },
//   methods: {
//     reserve(){
//       this.$router.push('/terapeutas/:slug')
//     }
  
// }
}

  
</script>

<style scoped>

.rounded-card{
    border-radius:50px;
}
.zoom-efect {
  transform: scale(1.1);
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>