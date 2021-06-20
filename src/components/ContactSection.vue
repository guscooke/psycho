<template>
  <section class="color"  id="contact">
    <v-container  fluid>
 <h1 class="dark--text font-weight-bold display-1 mt-6 mb-6">
        Fale com a Gente
      </h1>
      <v-row class="mt-6" align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="5">
              <h5 class="font-weight-light display-1">Clinica Szeckir</h5>
              <h4 class="font-weight mt-3">
                Preencha o formulário que retornaremos em breve
              </h4>
              <!-- <h4 class="font-weight mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h4> -->
              <!-- <h4 class="font-weight mt-3">
                Telefone: +xx (xx) xxxxx-xxxx
              </h4>
              <h4 class="font-weight">e
                Email: email@email.com
              </h4> -->
 
            </v-col>

            <v-col cols="12" sm="7">
       
                <div class="main mb-6">
                  <div class="container1">
                    <v-form class="form">
                      <h1 class="mb-3 mt-4">Contato</h1>
                      <h4 class="mb-4 mt-4">Deixe sua Mensagem</h4>
                      <input placeholder="Seu nome" type="text" tabindex="5" class=" font-weight form__field">

                      <input placeholder="Seu melhor Email" type="text" tabindex="5" class=" font-weight form__field">

                      <input placeholder="Deixe seu Celular" type="text" tabindex="5" class=" font-weight form__field">

                      <textarea placeholder="Deixe a sua mensagem..."></textarea>

                      <button name="submit" type="submit"
                        class=" font-weight btn btn--primary btn--inside uppercase mt-4">enviar</button>
                    </v-form>
                  </div>
                </div>
       

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

 
  </section>

</template>
<script>
  export default {
    data() {
      return {
        formValues: {}
      }
    }
  }
</script>

<style scoped>
#contact {
  background-image: url("~@/assets/img/bgx.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  /* background-size: cover; */
  /* background-position: center; */
  max-height: 20%;
}
  .main {
    max-width: 350px;
    margin: 0 auto;
  }

  .color {
     background: #e9e8e8;
  }
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: justify;
    background: #fffefe;
    border: 1px solid #EEEEEE;
    border-radius: 20px;
    padding: 0 30px 20px 30px;
    margin-top: 35px;
    box-shadow: 4px 10px 20px #acaaaa;

  }


  input {
    display: block;
    border: 1px solid #f0f0f5;
    padding: 10px 40px;
    margin-bottom: 10px;
    background: white;
    width: 300px;
    border-radius: 3px;
    box-shadow: 2px 2px 10px #E8EAF6;

    color: #263238;
  }

  .uppercase {
    text-transform: uppercase;
  }

  textarea {
    display: block;
    border: 2px solid #f0f0f5;
    padding: 10px 40px;
    margin-bottom: 15px;
    background: white;
    width: 300px;
    min-height: 125px;
    border-radius: 3px;
    box-shadow: 2px 2px 10px #f0f0f5;

    color: #263238;
  }

  /*btn*/
  .btn {
    display: block;
    color: #e6fff9;
    font-family: sans-serif;
    font-weight: 700;
    border: 0px solid #EEEEEE;
    padding: 10px 40px;
    background: #03989E;
    width: 100%;
    border-radius: 21px;
  }

  .btn {
    -webkit-transition-duration: 0.5s;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #706d6d;
  }
</style>