<template>
  <v-app>
    <template v-if="getLogado">
     <v-main>
       <Home/>
    </v-main>
    </template>
    <template v-else>
      <Login/>
    </template>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',

  components: {
    Home: () => import('@/views/Home'),
    Login: () => import('@/views/Login')
  },
  data(){
    return {
      
    }
  },
    computed: {
        ...mapGetters(['getLogado'])
   }
};
</script>
