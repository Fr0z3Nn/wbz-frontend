<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://i.ibb.co/DVDjNkn/ledentsy-konfety-sladkoe-136061-1920x1080.jpg"
    >

      <v-app-bar-nav-icon @click="openLeftMenu(true)" style="color: black"></v-app-bar-nav-icon>


      <v-btn icon>
        <v-icon color="black" @click="switchAuthorization">mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon @click="$vuetify.theme.dark =!$vuetify.theme.dark">
        <v-icon color="black">mdi-brightness-6</v-icon>
      </v-btn>

      <v-spacer/>
      <v-toolbar-title style="color: black">WBZ | ТУПА МАГАЗИН</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>


    <!--ДИАЛОГ РЕГИСТРАЦИИ-->
    <DialogRegistration></DialogRegistration>

    <!--ДИАЛОГ АВТОРИЗАЦИИ-->
    <DialogAuthorization></DialogAuthorization>

    <!--ЛЕВОЕ ВЫПАДАЮЩЕЕ МЕНЮ-->
    <LeftMenu></LeftMenu>

  </div>
</template>

<script>


import DialogRegistration from "@/components/DialogAuthorization";
import DialogAuthorization from "@/components/DialogRegistration";
import LeftMenu from "@/components/LeftMenu";

export default {
  components: {LeftMenu, DialogAuthorization, DialogRegistration},
  name: "MainPage",

  methods: {
    switchAuthorization: function () {
      this.$store.commit('updateDialogAuthorization', true)
    },
    openLeftMenu(value) {
      this.$store.commit('updateLeftMenuDrawer', value)
    }
  }


};
</script>

<style scoped>

</style>