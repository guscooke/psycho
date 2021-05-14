<template>
  <section>
    <div class="profissionai-details">
  

  
    </div>
    <span></span>
    <v-date-picker v-model="picker" year-icon="mdi-calendar-blank" prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next">
    </v-date-picker>


  </section>
</template>
<script>
  import axios from 'axios';

  export default {
    components: {},

      data() {
      return {
        profissionais: {},
      }
    },

    props: {
  
      profissionaiId: {
        type: String,
        required: true
      }
    },
    methods: {
      async getProfissionais() {
        console.log('hello')
        const response = await axios.get('http://localhost:5000/profissionais');
        this.profissionais = response.data;
        console.log(this.profissionais);

      }
    },
    created: function () {
      this.getProfissionais();
    },
        computed: {

      profissionai() {
        return this.data.profissionais.find(
          profissionai => profissionai.id === this.profissionaiId
        )
      }

    },
    
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