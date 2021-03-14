<template>
  <v-list>
      <Loading/>
    <v-list-item>
      <v-spacer/>
      {{total}}</v-list-item>
       <v-list-group
          
          no-action
          sub-group
           v-for="(item, i) in items"
            :key="i"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(children, i) in item.subMenus"
            :key="i"
            link
            @click="$emit('childen',children)"
          >
            <v-list-item-title v-text="children.name"></v-list-item-title>
            <v-chip>
              <span> {{children.total}}</span>
            </v-chip>
          </v-list-item>
        </v-list-group>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex'
import servico from '../../services/'
export default {
  name:"ListInbox",
   components:{
        Loading: ()=> import('../Loading')
    },
  data (){
    return {
      items: [],
      total: 0,
    }
  },methods:{
     ...mapActions(['setLoading']),
    async getInbox(){
      try{
        this.setLoading(true);
       const response = await servico.getMenu();
       let total =0;
        for(let item of response.data){
          let count = 0;
          let filhos = [];
          for ( let itemFilho of item.subMenus){
            const response = await servico.getItems(itemFilho.id);
            count = response.data.subMenuItems.length
          
            filhos.push({
              id: itemFilho.id,
              name: itemFilho.name,
              total: count,
              childrens: response.data
            })
            total+=count;
          }
               this.items.push({
            name: item.name,
            id: item.id,
            subMenus: filhos
          })
          
           console.log(this.items)
        }
        this.total =total;
      }catch(e){
        console.log(e)
      }finally{
        this.setLoading(false);
      }
    }
  },
  created (){
    this.getInbox();
  }
}
</script>

<style>

</style>