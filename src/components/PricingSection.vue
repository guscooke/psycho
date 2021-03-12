<template>
  <section id="pricing" class="pa-2">
      <v-container fluid id="features" class="mt-2">  
        <h1 class="font-weight-Bold display-1 mb-6" justify="center">
                Marque sua Consulta!
              </h1> 
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12"
                  sm="4"
                  class="text-center"
                  v-for="(item, i) in items"
                  :key="i">
        
                <!-- <template v-for="(item, i) in items"> -->
        <v-hover v-slot:default="{ hover }">
        <v-card
        max-width="374"
        outlined
        shaped
        :key="i"
        :elevation="hover ? 10 : 4"
        :class="{ up: hover }"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="item.img"
    ></v-img>

    <v-card-title>{{ item.title}}</v-card-title>

    <v-card-text>
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

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{ item.subtitle }}
      </div>

      <div>{{ item.text2 }} </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Horários Disponíveis</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Agende
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-hover>
                <!-- </template> -->
        </v-col>
          </v-row>
        </v-col>
      </v-row>



    </v-container>
    <div class="svg-border-rounded text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>
<script>

export default {
  data: () => ({
    items: [
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
        img: require("@/assets/img/au.jpg"),
        title: 'João silva',
        subtitle: 'Psicologo',
        text2: 'bla, bla, bla, bla,bla, bla,bla, bla,bla, bla,bla, bla',

        }
        
    ]
  })
}
  
</script>


<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
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