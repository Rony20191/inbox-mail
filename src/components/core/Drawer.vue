<template>
  <v-navigation-drawer
    ref="drawer"
    app
    permanent
    left
    :width="navigation.width"
    v-model="navigation.shown"
    max-width="700"
  >
  <v-card
   :width="navigation.width"
    
    class="mx-auto"
  >
    <v-toolbar extended >
      <v-toolbar-title class="headline text-uppercase">
        
      <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-avatar size="40" @click="setLogado(false)">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn outlined>
        <v-icon left>mdi-plus</v-icon> Novo
      </v-btn>
    
    </v-toolbar>

    <v-card-text>
      <v-row>
      <v-btn text>Favorito
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-spacer/>
      <span> 30 </span>
      </v-row>
    </v-card-text>
      <ListInbox  @childen="$emit('items',$event)"/>
    </v-card>
  
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components:{
    ListInbox: () => import("./ListInbox")
  },
  data() {
    return {
      items: null,
      navigation: {
        shown: true,
        width: 550,
        borderSize: 3,
      },
    };
  },
  methods: {
    ...mapActions(['setLogado']),
    setBorderWidth() {
      let i = this.$refs.drawer.$el.querySelector(
        ".v-navigation-drawer__border"
      );
      i.style.width = this.navigation.borderSize + "px";
      i.style.cursor = "ew-resize";
    },
    setEvents() {
      const minSize = this.navigation.borderSize;
      const el = this.$refs.drawer.$el;
      const drawerBorder = el.querySelector(".v-navigation-drawer__border");
      const vm = this;
      const direction = el.classList.contains("v-navigation-drawer--right")
        ? "right"
        : "left";

      function resize(e) {
        document.body.style.cursor = "ew-resize";
        let f =
          direction === "right"
            ? document.body.scrollWidth - e.clientX
            : e.clientX;
        el.style.width = f + "px";
      }

      drawerBorder.addEventListener(
        "mousedown",
        function (e) {
          if (e.offsetX < minSize) {
            el.style.transition = "initial";
            document.addEventListener("mousemove", resize, false);
          }
        },
        false
      );

      document.addEventListener(
        "mouseup",
        function () {
          el.style.transition = "";
          vm.navigation.width = el.style.width;
          if(vm.navigation.width === 700){
            return;
          }
          document.body.style.cursor = "";
          document.removeEventListener("mousemove", resize, false);
        },
        false
      );
    },
  },
  computed: {
    direction() {
      return this.navigation.shown === false ? "Open" : "Closed";
    },
  },
  mounted() {
    this.setBorderWidth();
    this.setEvents();
  },
};
</script>
T A B S
<style>
</style>