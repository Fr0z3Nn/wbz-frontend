<template>
  <div>
    <v-dialog
        v-model="authorization"
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
                    label="Логин*"
                    required
                    v-model="user.username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Пароль*"
                    type="password"
                    required
                    v-model="user.password"
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
              @click="closeAuthorization"
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
              @click="authorizationUser"

          >
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogRegistration",
  data: () => ({
    user: {
      username: '',
      password: ''
    },
  }),
  watch: {},
  computed: {
    authorization: {
      get(){
        return this.$store.state.dialogAuthorization
      },
      set(value){
        this.$store.commit('updateDialogAuthorization',value)
      }
      },
  },
  methods: {
    authorizationUser: function () {
      this.axios.post("http://localhost:9000/api/auth/login", this.user)
          .then(response => {
            let roles = this.$store.state.parseJwt(response.data.token).roles;
            this.$store.commit('checkAdmin', roles)
          })
    },
    switchDialog: function () {
      this.$store.commit('switchDialogs')
    },
    closeAuthorization(){
      this.$store.commit('updateDialogAuthorization',false)
    }

  }
}
</script>

<style scoped>

</style>