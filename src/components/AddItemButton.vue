<template>
  <div>
    <v-btn
        color="primary"
        fab
        small
        dark
        @click="addItem(item)"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialogAdd" persistent max-width="600px" >
      <v-card>
        <v-card-title>
          <span class="headline">Новый товар:</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="name"
                    label="Название*"
                    required ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="description"
                    label="Описание*"
                    required ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="price"
                    label="Цена*"
                    required ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="image"
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
  props: [],
  data: () => ({
    item:{
      id: 0,
      name: '',
      description:'',
      price:'',
      image:''
    },
    name:'',
    description:'',
    price: 0,
    image:'',
    editedItem: {},
    defaultItem: {},
    dialogAdd: false
  }),

  methods: {
    addItem: function (item) {
      this.dialogAdd = true
      console.log(this.item)
      this.editedItem = Object.assign({}, item)
    },
    closeAdd: function () {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.dialogAdd = false
    },
    addItemConfirm: function(){
      this.editedItem.name = this.name
      this.editedItem.description = this.description
      this.editedItem.price =this.price
      this.editedItem.image = this.image
      console.log(this.editedItem)
      this.axios
          .post('http://localhost:9000/addItem/', this.editedItem)
          .then(response => {
            this.items = response.data
          })
          .catch(error => console.log(error))
      this.closeAdd()
    }
  }
}
</script>

<style scoped>

</style>