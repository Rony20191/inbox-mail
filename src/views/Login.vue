<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="4" sm="12" lg="4">
      <v-card>
        <v-card-title>
          <v-row justify="center" align="center">
            <v-col cols="4">
          <v-img   :color="switch1?'white':'black'"  src="@/assets/email.svg" alt="MailBox"/>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-subtitle>
         <p :class="`text-center ${switch1?'white--text':'black--text'} ` ">
          <span class="display-2">  MailBox </span>
         </p>
        </v-card-subtitle>
        <v-card-text>
          <v-form ref="formLogin" lazy-validate v-model="form">
            <v-text-field
              v-model="usuario.name"
              label="User Name"
              :rules="rules.nome"
            ></v-text-field>
            <v-text-field
              v-model="usuario.password"
              label="Password"
              :rules="rules.password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row dense align="center">
            <v-btn block @click="login()">Login</v-btn>
            <v-switch v-model="switch1" label="Dark Mode" @change="mudarMode()"></v-switch>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: true,
      switch1: false,
      usuario: {
        name: "",
        password: "",
      },
      rules: {
        nome: [(v) => !!v || "O nome do usuário é obrigatório"],
        password: [(v) => !!v || "A senha  é obrigatória"],
      },
    };
  },
  methods: {
    ...mapActions(["setLogado", "setDarkMode"]),
    login() {
      if (!this.$refs.formLogin.validate()) return;
      if (this.usuario.name === "admin" && this.usuario.password === "admin") {
        this.$store.dispatch("setLogado", true);
      }
    },
    mudarMode(){
         this.$vuetify.theme.dark = this.switch1;
        this.setDarkMode(this.switch1)
    }
  },
  computed: {
    ...mapGetters(["getDarkMode"]),
  },
  mounted() {
    this.switch1 = this.getDarkMode;
    this.$vuetify.theme.dark =   localStorage.getItem('darkMode')
  },
};
</script>

<style></style>
