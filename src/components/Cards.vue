<template>
  <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="cover"></div>
        <div class="user">
          <img class="img-circle" alt src="@/assets/img/doutora.jpg">
        </div>
        <div class="content">
          <div class="main">

            <h2 class="font-weight">{{ profile.nome }} {{ profile.sobrenome }}</h2>
            <h4 class="mt-3">{{ profile.descricao }}</h4>
            <p class="text-center">{{ profile.motto }}</p>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>

              TEXTO


            </v-card-text>
            <div class="text-center">
              <v-btn class="mt-6" rounded color="primary" dark>
                <strong>
                  Ver Agenda</strong>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "Card",
    props: ["profile"],
    data: () => ({
      // dialog: false,
    }),
  }
</script>

<style scoped>
  .card-container {
    perspective: 800px;
    margin-bottom: 30px;
  }

  .card {
    transition: transform 0.5s;
    transform-style: preserve-3d;
    position: relative;
  }

  .front {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
  }

  .front {
    z-index: 2;
  }

  .card {
    background: none repeat scroll 0 0 #ffffff;
    border-radius: 10px;
    color: #444444;
  }

  .card-container,
  .front {
    width: 100%;
    height: 550px;
    border-radius: 30px;
  }

  .card .cover {
    height: 90px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    background: #03989E;
  }

  .card .cover img {
    width: 100%;
    display: none;
  }

  .card .user {
    border-radius: 50%;
    display: block;
    height: 120px;
    margin: -55px auto 0;
    overflow: hidden;
    width: 120px;
  }

  .card .user img {
    background: none repeat scroll 0 0 #ffffff;
    border: 4px solid #ffffff;
    width: 100%;
  }

  .card .content {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    padding: 10px 20px 20px;
  }

  .card .content .main {
    min-height: 200px;
  }

  .card .back .content .main {
    height: 215px;
  }

  .card .nome {
    font-size: 20px;
    line-height: 28px;
    margin: 10px 0 0;
    text-align: center;
    text-transform: capitalize;
    font-weight: lighter;
  }

  .card .descricao {
    color: #999999;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .card .motto {
    border-bottom: 1px solid #eeeeee;
    color: #999999;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 10px;
    text-align: center;
  }
</style>