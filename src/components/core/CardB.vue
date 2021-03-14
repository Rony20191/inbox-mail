<template>
  <v-card width="100%">
      <Toolbar />
      <ListMail :items="items" />
  </v-card>
</template>

<script>
export default {
    props:['items'],
    components: {
        Toolbar: () => import('./Toolbar'),
        ListMail: () => import('./ListMail'),
    },
    data(){
        return {
          
        }
    },
    
}
</script>

<style>

</style>