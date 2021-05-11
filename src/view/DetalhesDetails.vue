<template>
  <section>
    <h3 class="mt-4">{{ especialidade.name }} </h3>

    <div class="profissionai-details">
      <!-- <p>{{ profissionai.nome }}</p> --> 
  

    </div>

    <span></span>

    <v-date-picker     
      v-model="picker"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next">
    </v-date-picker>

    <div>
      ////button to cofirm open a modal to register name email and password////
    </div>

  </section>
</template>
<script>
  import store from "@/store.js";

  export default {
    components: {},

    data() {
      return {
        date: new Date().toISOString().substr(0, 10),

      }
    },
    methods: {

    },

    props: {
      slug: {
        type: String,
        required: true
      },
      profissionaiId: {
        type: String,
        required: true
      }
    },
    computed: {
      especialidade() {
        return store.especialidades.find(
          especialidade => especialidade.slug === this.slug
        );
      },
      profissionai() {
        return this.especialidade.profissionais.find(
          profissionai => profissionai.id === this.profissionaiId
        )
      }

    },
    methods: {
      getProfissionais() {
        console.log('hello')
        return axios.get('http://localhost:5000/profissionais')
          .then(response => {
            this.profissionais = response.data;
            console.log(this.profissionais)
          }, )

      }
    },
    created: function () {
      this.getProfissionais();
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
