<template>
  <section class="color" id="contact">
    <v-container :style="{'background-image':'url(`@/assets/img/bgx.jpg`)'}" height="800" >
 
  
 <h1 class="dark--text font-weight-bold display-1 mt-6 mb-6">
        Fale com a Gente
      </h1>
      <v-row class="mt-6" align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="5">
              <h5 class="font-weight-light display-1">Clínica Szeckir</h5>
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
                  <div class="container1 fontBold">
                    <v-form 
                    @submit="checkForm"
                        action="https://api.staticforms.xyz/submit"
                        method="post"
                        novalidate="true"
                    >
                      <h1 class="mb-3 mt-4">Contato</h1>
                      <h4 class="mb-4 mt-4">Deixe sua Mensagem</h4>
                      
                      <input id="nome" placeholder="Seu nome" type="text" tabindex="5" class=" font-weight form__field"  v-model="data.name" >
                     
                      <input placeholder="Seu melhor Email" type="email" tabindex="5"  class=" font-weight form__field" v-model="data.email" >

                      <input placeholder="Deixe seu Celular" type="text" tabindex="5" class=" font-weight form__field" v-model="data.phone" >

                      <!-- <label for="mensagem">Mensagem <small>(<span>{{ mensagem.length }}</span> / <span>{{ maxLength }}</span>)</small></label> -->
                      <textarea placeholder="Deixe a sua mensagem..." v-model="data.message"  name="mensagem"></textarea>
                       <div class="form-field" style="display:none">
                        <label for="honeypot" >Honeypot</label>
                        <input type="text" name="honeypot" v-model="data.honeypot" placeholder="honeypot" >
                      </div>

                        <div v-if="errors.length" class="info-message">
          
            <p v-for="error in errors" :key="error.id">{{error}}</p>
          
      </div>
                      <button type="submit" value="enviar"
                        class="font-weight btn btn--primary btn--inside uppercase mt-4">enviar</button>
<!-- 
                         <v-btn type="reset"
                         class="Igor--text font-weight btn uppercase mt-4">Limpar</v-btn> -->
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
import axios from 'axios';

export default {

  data() {
    return {

       errors: [],
    data: {
      name:null,
      email:null,
      phone:null,
      subject: 'Acaba de chegar uma mensagem para Clinica Szeckir',
      // honeypot:'',
      message:null,
      replyTo:'clinica.szeckir@gmail.com',
      accessKey: 'cc9f79f4-2787-40c2-8d20-ca7a7e8729ef' 
    },
    response:{
      type:'',
      message:''
    }
  }
},
methods: {
    checkForm: function(e) {
      this.errors= [];
      if(!this.data.name) {
        this.errors.push('O nome é obrigatório!')
      }
      if(isNaN(this.data.phone)){
        this.errors.push('Celular precisa ser válido!')
      }
      if(!this.data.email) {
        this.errors.push('O email é obrigatório!')
      }else if (!this.validEmail(this.data.email)) {
        this.errors.push('O email precisa ser válido.')
      }
      if(!this.data.message) {
          this.errors.push('Por favor, deixe a sua mensagem')
      }
      if(!this.errors.length){
        return this.submitHandle(e);
      }
      e.preventDefault();
      
    },
    validEmail: function(email){
      var re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    },
    // funcion para comunicarse con la API
    async submitHandle(e) {
      e.preventDefault();
      let data = this.data
      try {
        let response = await axios.post("https://api.staticforms.xyz/submit", data, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })
        if(response.data.success){
          this.errors.push('Mensagem enviada com sucesso')
          this.resetForm();
        }else{
          this.errors.push('Tivemos um problema com a sua mensagem.')
        }
        
      } catch (error) {
        this.errors.push['Tivemos um problema ao enviar a sua mensagem.']
      }
      this.cleanErrors(5000)
    },
    cleanErrors: function(t) {
        setTimeout(() => {
        this.errors = []
      },t)
    },

    resetForm: function() {
      this.data.name= null
      this.data.email= null
      this.data.phone=null
      this.data.message=null
      // this.data.honeypot=''
    }
}
  
  
};
</script>

<style >
#contact {
  background-image: url("~@/assets/img/bgx.jpg") !important;
  
  /* background-repeat: no-repeat; */
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
    border: 5px solid #EEEEEE;
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
   .fontBold {
    font-weight: bold;
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

  .info-message{
  list-style: none;
  margin: 10px;
  line-height: 0.1rem;
  
}
.form-contact{
  display: inline-block;
  margin: auto;
  background-color: lightcyan;
  padding: 20px;
}
.form-field{
  display: flex;
  flex-direction: column;
  margin: 2px 10px;
}
.form-field-input{
  background-color: #fff;
  border: 1px solid grey;
  height: 23px;
  padding: 5px;
}
.form-field-txt{
  border: 1px solid grey;
  padding: 5px;
  resize: none;
}
.form-field-input:focus, .form-field-txt:focus{
  outline: 1px solid orange;
  border: 1px solid orange;
}
.form-button {
  background-color: orange;
  border: none;
  padding: 5px;
}
.form-button:hover {
  background-color: rgb(255, 187, 0);
}
</style>