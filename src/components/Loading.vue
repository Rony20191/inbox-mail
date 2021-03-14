<template>
   <v-card v-show="getLoading">
    <v-progress-linear
      indeterminate
      color="cyan"
    ></v-progress-linear>
   </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Loading',
    data (){
        return {
            
        }
    },
    computed: {
        ...mapGetters(['getLoading'])
     }
}
</script>

<style>

</style>