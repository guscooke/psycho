<template>
  <div>
    <v-app-bar app color='#ffff' class="px-15">
      <router-link to="/">
        <v-img src="@/assets/img/LogoFinal.png" max-width="200px" />
      </router-link>
      <v-spacer />

      <router-link class="links" to="/">
        <v-btn color="Igor" fab x-small dark>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <div v-for="especialidade in especialidades" :key="especialidade.name">
        <router-link :to="{
            name: 'pisicoDetails',
            params: { slug: especialidade.slug }
          }">
          <v-btn class="mx-2" rounded color="primary" dark>
            <h4>{{ especialidade.name }}</h4>
          </v-btn>
        </router-link>
      </div>
      <!-- <li class="links">
        <router-link to="/user">Dashboard</router-link>
      </li> -->
    </v-app-bar>
  </div>
</template>

<script>
  import store from "@/store";
  export default {
    data() {
      return {
        especialidades: store.especialidades
      };
    }
  };
</script>

<style scoped>
  #nav a {
    color: #ffff;
    text-decoration: none;
    font-weight: bold;

  }


  .nav-links {
    display: flex;
    color: rgb(255, 255, 255);
  }

  .links {
    padding-right: 20px;
    list-style: none;
    color: #ffff;
  }

  .links:hover {
    text-decoration: underline;
  }

  /* .logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
} */
</style>