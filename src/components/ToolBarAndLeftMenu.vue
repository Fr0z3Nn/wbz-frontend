<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://i.ibb.co/DVDjNkn/ledentsy-konfety-sladkoe-136061-1920x1080.jpg"
    >
      <v-app-bar-nav-icon @click="drawer = true" style="color: black"></v-app-bar-nav-icon>


      <v-btn icon>
        <v-icon color="black" @click="dialogAuthorization = true">mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon @click="$vuetify.theme.dark =!$vuetify.theme.dark">
        <v-icon color="black">mdi-brightness-6</v-icon>
      </v-btn>

      <v-spacer/>
      <v-toolbar-title style="color: black">WBZ | ТУПА МАГАЗИН</v-toolbar-title>
      <v-spacer/>

    </v-toolbar>

    <!--ДИАЛОГ РЕГИСТРАЦИИ-->
    <div>
      <v-dialog
          v-model="dialogRegistration"
          temporary
          max-width="600px"
      >

        <v-card>
          <v-card-title>
            <span class="headline">Вход / Регистрация</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                >
                  <v-text-field
                      label="Имя*"
                      required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                      label="Почта*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Пароль*"
                      type="password"
                      required
                  ></v-text-field>
                </v-col>


              </v-row>
            </v-container>
            <small>*обьязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialogRegistration = false"
            >
              Закрыть
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="switchDialog"
            >
              Войти
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialogRegistration = false"
            >
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!--ДИАЛОГ АВТОРИЗАЦИИ-->
    <div>
      <v-dialog
          v-model="dialogAuthorization"
          temporary
          max-width="600px"
      >

        <v-card>
          <v-card-title>
            <span class="headline">Авторизация</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      label="Почта*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Пароль*"
                      type="password"
                      required
                  ></v-text-field>
                </v-col>


              </v-row>
            </v-container>
            <small>*обьязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialogAuthorization = false"
            >
              Закрыть
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="switchDialog"
            >
              Зарегистрироваться
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialogAuthorization = false"
            >
              Войти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

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


export default {

  name: "MainPage",

  data: () => ({
    drawer: false,
    dialogRegistration: false,
    dialogAuthorization: false,
    group: null,
  }),
  components: {

  },

  methods: {
    switchDialog: function (){
      this.dialogRegistration = !this.dialogRegistration
      this.dialogAuthorization = !this.dialogAuthorization
    }
  }


};
</script>

<style scoped>

</style>