<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://i.ibb.co/DVDjNkn/ledentsy-konfety-sladkoe-136061-1920x1080.jpg"
    >
      <v-app-bar-nav-icon style="color: black"></v-app-bar-nav-icon>=

      <v-btn icon>
        <v-icon color="black" @click="dialogRegistration = true">mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon @click="$vuetify.theme.dark =!$vuetify.theme.dark">
        <v-icon color="black" >mdi-brightness-6</v-icon>
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
                  @click="dialogRegistration = false"
              >
                Войти / Зарегистрироваться
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>



<!--ЛЕВОЕ ВЫПАДАЮЩЕЕ МЕНЮ-->
<LeftMenu />

  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu";
export default {

  name: "MainPage",

  data: () => ({
    dialogRegistration: false,
    group: null,
  }),
  components:{
    LeftMenu
  },
  mounted() {
    console.log('Родительский элемент = ' + this.ttt)
  },
  watch:{
    ttt: function (){
     console.log('Родительский элемент = ' + this.ttt)
    }
  },
  methods:{
ppp: function (){
  this.ttt = false
}
  },


};
</script>

<style scoped>

</style>