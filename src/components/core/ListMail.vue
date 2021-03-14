<template>
      <v-list two-line>
        
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiples
      >
        <template v-for="(item, index) in lista">
        <v-hover v-slot:default="{ hover }" :key="index+2">
          <v-list-item :key="index ">
              
            <template v-slot:default="{ active }">
                 
                     <v-list-item-action>
                        <v-checkbox   v-if="select || hover" @click="select=true" v-model="selectedCheck" :value="item.id" :key="item.id"></v-checkbox>
                         <v-avatar
                            v-if="!hover &&  !active && !select"
                            color="primary"
                            @change="select=false"
                            size="35"
                            >
                        <span> {{item.owner}}</span>
                         </v-avatar>
                     </v-list-item-action>
                 
      
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.subject"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="items.name"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                  <v-list>
                      <v-list-item class=" ma-0" >
                          <span>Hoje, 11:42</span>
                      </v-list-item>
                      <v-list-item  class="ma-0">
                        <v-row
                         align="center"
                        justify="space-around"
                    >
                    
                             <v-avatar
                              v-for="(user,i) in item.users" :key="i+item.id"
                            color="primary"
                            size="35"
                            >
                        <span> {{user}}</span>
                         </v-avatar>
                   
                    </v-row>
                    </v-list-item>
                  </v-list>
              </v-list-item-action>
            </template>
          </v-list-item>
          </v-hover>
          <v-divider
            v-if="index < lista.length - 1"
            :key="index+3"
          ></v-divider>
         
        </template>
      </v-list-item-group>
    </v-list>
</template>

<script>

export default {
    props: ['items'],
   
data(){
    return {
        select:false,
        selected: [],
        selectedCheck:[],
        lista: []
    
    }
},watch: {
    items: {
        handler(){
            if(this.items.childrens.subMenuItems)
            this.lista = this.items.childrens.subMenuItems
   

        }
    },
    selectedCheck: {
        handler(){
            if(this.selectedCheck.length === 0) this.select = false;

        }
    },
 
}
}
</script>

<style>

</style>