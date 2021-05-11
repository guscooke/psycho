<template>
    
        <v-row>
         <v-col cols="12">
        <v-btn @click.prevent="getProfissionais">Get users</v-btn>
        <br />

        <div class="profissionais" v-for="profissionai in profissionais.data" :key="profissionai.id">
            <v-card class="mx-auto" max-width="344" outlined>
                <h1>{{ profissionai.nome }}</h1>
                <p>{{ profissionai.sobrenome }}</p>
                <p>{{ profissionai.email }}</p>
                <p>{{ profissionai.mobile }}</p>
                <p>{{ profissionai.ativo }}</p>
                <p>{{ profissionai.tipo }}</p>
            </v-card>
        
        </div>
  
<template>
  <v-data-table
    :headers="headers"
    :items="profissionais"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
         </v-col>
    </v-row>
  
</template>

<script>
    import axios from 'axios';
        export default {
            data() {
                return {
                   
                    profissionais: [
                       { name: 'nome',value: 'nome' 
           },
                    ],
                

                    headers:[
               
                   
          {
            text: 'nome',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'sobrenome',
           value: 'sobrenome' 
           },
           { text: 'email',
           value: 'email' 
           },
           { text: 'mobile',
           value: 'mobile' 
           },
         
       
        ],
                
                
                
                }   
            },
        
        methods: {
            async getProfissionais() {
                console.log('hello')
                try {
                    const response = await axios.get('http://localhost:5000/profissionais');
                    console.log(this.profissionais)
                    this.profissionais = response.data;
                    this.nome = response.data;

                } catch (e) {
                    console.log(e)
                }
            },
            created: function () {
                this.getProfissionais();
            },
        },
    };
</script>

  

