<template>
  <div>
    <v-dialog
        v-model="authorization"
        temporary
        max-width="600px"
    >

      <v-card
      :loading="vLoginLoading">
        <v-card-title>
          <span class="headline">Авторизация</span>
        </v-card-title>
        <v-alert type="error" v-if="vLoginAlert">
          Ошибка - введите верный логин или пароль.
        </v-alert>
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
              @click="closeAuthorization(false)"
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
  name: "DialogAuthorization",
  computed: {
    authorization: {
      get() {
        return this.$store.state.dialogAuthorization
      },
      set(value) {
        this.closeAuthorization(value)
      }
    },
    user() {
      return this.$store.state.user
    },
    vLoginAlert(){
      return this.$store.state.vBadLoginAlert
    },
    vLoginLoading(){
      return this.$store.state.vNewLoginLoading
    }

  },
  methods: {
    authorizationUser: function () {
      this.$store.dispatch('AUTHORIZATION_USER')
    },
    switchDialog: function () {
      this.$store.commit('switchDialogs')
    },
    closeAuthorization(value) {
      this.$store.commit('updateDialogAuthorization', value)
    }

  }
}
</script>

<style scoped>

</style>