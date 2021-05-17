<template>
  <section>
    <div class="profissionai-details" >
        <h2>Profissional: {{ profissionaiId }}</h2>
    </div>
    <span></span>
    <v-date-picker :date="picker"
     year-icon="mdi-calendar-blank" 
     prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
      elevation="15">
    </v-date-picker>
    <template>
  <div class="text-center">
    <v-btn
    class="mt-8"
      rounded
      color="primary"
      dark
    >
      Agendar
    </v-btn>
  </div>
</template>


  </section>
</template>
<script>
 

  export default {
    components: {},
      props: ['profissionaiId'],

      data() {
      return {
        picker:new Date().toISOString().substr(0, 10), 
      }
    },
    method:{

      
    }


    
  };
</script>

<style scoped>
  img {
    max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
  }

  .profissionai-details {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
  }

  p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
  }
</style>