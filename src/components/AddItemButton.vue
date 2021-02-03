<template>
  <div>
    <v-btn
        color="primary"
        fab
        small
        dark
        @click="addItem"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialogAddItem" persistent max-width="600px" >
      <v-card>
        <v-card-title>
          <span class="headline">Новый товар:</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="item.name"
                    label="Название*"
                    required ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="item.description"
                    label="Описание*"
                    required ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="item.price"
                    label="Цена*"
                    required ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="item.image"
                    label="Картинка*"
                    required ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Обязательные поля</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="closeAdd">Отмена</v-btn>
          <v-btn color="blue darken-1" text @click="addItemConfirm">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
export default {
  name: "AddItemButton",
  computed:{
    item(){
      return this.$store.state.item
    },
    dialogAddItem(){
      return this.$store.state.dialogAddItem
    }
  },
  methods: {
    addItem: function () {
      this.$store.commit('updateDialogAdd', true)
    },
    closeAdd: function () {
      this.$store.commit('updateDialogAdd', false)
    },
    addItemConfirm: function(){
      this.$store.dispatch('ADD_ITEM')
      this.closeAdd()
    },
  }
}
</script>

<style scoped>

</style>