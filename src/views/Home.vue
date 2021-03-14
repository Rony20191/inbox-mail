<template>
<v-layout flex>
 
    <Drawer @items="items =$event"/>

    <CardB :items="items"/>
  
</v-layout>
</template>

<script>

export default {
  components: {
    Drawer: () => import('../components/core/Drawer'),
    CardB: () => import('../components/core/CardB')
  },
  data(){
    return {
      items: []
    }
  }
 
}
</script>

