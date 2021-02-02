<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://i.ibb.co/DVDjNkn/ledentsy-konfety-sladkoe-136061-1920x1080.jpg"
    >

      <v-app-bar-nav-icon @click="drawer = true" style="color: black"></v-app-bar-nav-icon>


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
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        width="180px"
    >

      <v-list
          nav
          dense
      >
        <v-list-item-group

            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-avatar color="indigo"
                      size="68"
            >

              <img
                  src="https://avatars0.githubusercontent.com/u/60842252?s=460&u=f18ef2a47b130b7a1c703ee5311fd350c25c8c57&v=4">

            </v-avatar>
          </v-list-item>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item>
          <v-list-item to="/shop">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Магазин</v-list-item-title>
          </v-list-item>
          <v-list-item to="/cart">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Корзина</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Контакты</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>


import DialogRegistration from "@/components/DialogAuthorization";
import DialogAuthorization from "@/components/DialogRegistration";

export default {

  name: "MainPage",

  data: () => ({
    drawer: false,
    group: null,

  }),
  components: {DialogAuthorization, DialogRegistration},

  methods: {
    switchAuthorization:function (){
      this.$store.commit('updateDialogAuthorization',true)
    }
  }


};
</script>

<style scoped>

</style>