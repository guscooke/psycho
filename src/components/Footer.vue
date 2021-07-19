<template>
  <v-footer padless >
    <v-card flat tile class="Igor white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text  pt-1">
        
<strong>Clínica Szeckir | Cnpj: 16.978.353/0001-09 | 2021 Todos os direitos reservados.</strong>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Clínica Szeckir</strong>
      </v-card-text>
    </v-card>
    
  </v-footer>    
</template>

<style scoped>
.v-card {
  width: 100%; 
}
.v-footer{

position: relative;
 bottom: 0;
 width: 100%;
}


</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      // {
      //   text: "mdi-twitter",
      //   link: "",
      // },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/clinica_szeckir/",
      },
    ],
  }),
};
</script>


