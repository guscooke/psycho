<template>
  <v-app>
    <v-main class="pt-0">
      <navigation :color="color" :flat="flat" />
      <home />
      <about />
      <quemsomos />
      <profi />
      <contact />
      <foote />
      <cookie-law   transitionName="fade" buttonText='Sim, eu concordo!' theme="blood-orange ">
  <div slot="message">
    <strong>Utilizamos cookies para que você tenha a melhor experiência do nosso site. 
    Por sua visita contínua ao nosso site, sem alterar suas configurações, você concorda com o uso de cookies da Clínica Szeckir .</strong>
  </div>
</cookie-law>

    </v-main>
    <v-scale-transition>
      <v-btn fab v-show="fab" v-scroll="onScroll" dark fixed bottom right color="primary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

  </v-app>
</template>

<script>

  import axios from 'axios';
  import home from "../components/HomeSection";
  import about from "../components/AboutSection";
  import quemsomos from "../components/QuemSomos";
  import profi from "../components/Profissionais";
  import contact from "../components/ContactSection";
  import navigation from "../components/Navigation";
  import foote from "../components/Footer";
  import CookieLaw from 'vue-cookie-law'



  export default {
    name: "App",

    components: {
      navigation,
      home,
      about,
      quemsomos,
      profi,
      contact,
      foote,
      CookieLaw
   
    },
    props: ['transaction_id'],
    data: () => ({
      fab: null,
      color: "",
      flat: null,
    }),


    created() {

      if( this.$route.query.transaction_id != null){
        axios.put(process.env.VUE_APP_ROOT_API + '/agenda/confirmar/' + localStorage.getItem('checkoutCode'), {              
              transaction_id: this.$route.query.transaction_id
            })
            .then(response => {
              if(response.status == 200)
                alert('Agendamento realizado com sucesso.');
              else
                alert('Erro ao processar pagamento.');
            })  
      }
      
      const top = window.pageYOffset || 0;
      if (top <= 60) {
        this.color = "#03989E";

        this.flat = true;
      }
    },

    watch: {
      fab(value) {
        if (value) {

          this.color = "#03989E" ;
          this.flat = false;
        } else {
          this.color = "#03989E";
          this.flat = true;
        }
      },
    },



    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
  };
</script>
<style scoped>






  
  


</style>