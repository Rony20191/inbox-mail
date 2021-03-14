<template>
   <v-card
    class="mx-auto"
  >
    <v-toolbar extended >
          <v-text-field class="mt-4" placeholder="Pesquisar" ></v-text-field>
    </v-toolbar>
    <v-card-text>
       <v-row
    align="center"
    justify="space-around"
  >
              <v-checkbox></v-checkbox>
       
              <v-btn >
                  <v-icon left>
                      mdi-clipboard-account
                  </v-icon>
                  Atribuir</v-btn>
   
                <v-btn >
                    <v-icon left>mdi-archive-arrow-down</v-icon>
                    Arquivar</v-btn>
       
                <v-btn>
                    <v-icon left>mdi-calendar-arrow-right</v-icon>
                    Agendar</v-btn>
        
      </v-row>
    </v-card-text>
   </v-card>
</template>

<script>
export default {
    props:['select'],
    data(){
        return {
           
        }
    },
  
}
</script>

<style>

</style>