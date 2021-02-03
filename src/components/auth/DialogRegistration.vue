<template>
  <div>
    <v-dialog
        v-model="registration"
        temporary
        max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Регистрация</span>
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
                    v-model="user.username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Почта*"
                    required
                    v-model="user.email"
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
          <small>*обязательные поля</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="closeRegistration(false)"
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
              @click="registrationUser"
          >
            Зарегистрироваться
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
export default {
  name: "DialogRegistration",
  watch: {},
  computed: {
    registration: {
      get() {
        return this.$store.state.dialogRegistration
      },
      set(value) {
        this.closeRegistration(value)
      }
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    registrationUser: function () {
      this.$store.dispatch('REGISTRATION_USER')
    },
    switchDialog: function () {
      this.$store.commit('switchDialogs')
    },
    closeRegistration(value) {
      this.$store.commit('updateDialogRegistration', value)
    }

  }
}
</script>

<style scoped>

</style>