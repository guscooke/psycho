<template>
  <section id="pricing" class="pa-2">
    <view-router/>
      <v-container fluid id="features" class="mt-4"> 
          
             <!-- <v-col
              cols="6"
              md="4"
              >
              <h1 class="font-weight-Bold display-1 mb-6 blue--text" justify="center">
                      Nossos Profissionais       
              </h1> 
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum.web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                    </v-col> -->
          
          <!-- <v-row align="left" justify="center"> -->
            <!-- <v-col cols="12"> -->
            <v-row align="center" justify="space-around">
                   <v-col
                    cols="6"
                    md="3"
                    sm="12"
                    >
                 <h1 class="font-weight-Bold display-1 mb-12 blue--text" >
                      Nossos Profissionais       
              </h1 > 
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum.web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                   </v-col>
                <v-col 
                  cols="6"
                  sm="3"
                  class="text-center"
                  v-for="(pisico, i) in pisicos"
                  :key="i"> 
                 
                       
                  <v-avatar 
                  size="200"  >
                    <img :src="pisico.img"/>
                  </v-avatar>
                       
                     
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                          max-width="350"
                          shaped
                          :key="i"
                          :elevation="hover ? 19 : 1"
                          :class="{ up: hover }">
                       
                       
                        
                        <v-img
                          src="@/assets/img/Pat.svg"
                        >
                          <v-card-text
                            class="title white--text pl-3">
                            <v-card-title>{{ pisico.title}}</v-card-title>
                              <v-row
                                align="center"
                                class="mx-0"
                              >
                                <v-rating
                                  :value="4.5"
                                  color="amber"
                                  dense
                                  half-increments
                                  readonly
                                  size="14"
                                ></v-rating>

                              <div class="dark--text ml-4">
                                4.5 (413)
                              </div>
                            </v-row>
                          <div class="my-4 subtitle-0 white--text">
                            {{ pisico.subtitle }}
                          </div>
                         <div class="white--text">{{ pisico.text2 }} </div>
                        </v-card-text>
                      <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-btn
                          color="white lighten-2"
                          text
                          @click="reserve"  
                        >
                        Agende
                        </v-btn>
                      </v-card-actions>
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

export default {
  data: () => ({
    pisicos: [
      {
        img: require("@/assets/img/doutora.jpg"),
        title: 'Ana paula',
        subtitle: 'Psicologa',
        text2: 'bla, bla, bla, bla,bla, bla,bla, bla,bla, bla,bla, bla',

        },
         {
        img: require("@/assets/img/doutora.jpg"),
        title: 'Roberta Albert',
        subtitle: 'Psicologa',
        text2: 'bla, bla, bla, bla,bla, bla,bla, bla,bla, bla,bla, bla',

        },
         {
        img: require("@/assets/img/doutora.jpg"),
        title: 'João silva',
        subtitle: 'Psicologo',
        text2: 'bla, bla, bla, bla,bla, bla,bla, bla,bla, bla,bla, bla',

        }
        
    ]
  }),
  methods: {
    reserve(){
      this.$router.push('/agendamento')
    }
  
}
}

  
</script>

<style scoped>

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