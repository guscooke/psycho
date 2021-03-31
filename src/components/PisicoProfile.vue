<template>
  <section class="pa-2">   
      <v-container fluid id="features" class="mt-2">  
        <v-row align="center" justify="center">
            <v-col cols="12"
                    sm="12"
                    md="12">
                <v-row align="center" justify="space-around">
                    <v-col 
                    cols="12"
                    class="text-center"
                    v-for="(item, i) in items"
                    :key="i">
            
                        
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
                                >
                                </v-progress-linear>
                            </template>
                            <v-img
                            shaped
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
                            >
                            </v-rating>

                        <div class="grey--text ml-4">
                        4.5 (413)
                        </div>
                    </v-row>

                        <div class="my-4 subtitle-1">
                            {{ item.subtitle }}
                        </div>

                        <div>
                            {{ item.text2 }} 
                        </div>

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
  </section>

<!-- s -->
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
        //  {
        // img: require("@/assets/img/doutora.jpg"),
        // title: 'Roberta Albert',
        // subtitle: 'Psicologa',
        // text2: 'bla, bla, bla, bla,bla, bla,bla, bla,bla, bla,bla, bla',

        // },
        //  {
        // img: require("@/assets/img/au.jpg"),
        // title: 'João silva',
        // subtitle: 'Psicologo',
        // text2: 'bla, bla, bla, bla,bla, bla,bla, bla,bla, bla,bla, bla',

        // }
        
    ]
  }),
  methods: {
    // reserve(){
    //   this.$router.push('/p')
    // }
  
}
}

  
</script>
<style lang="scss" scoped>

</style>


