<template>
  <div>
    <SearchFieldAndAddButton/>
      <v-data-table
          :headers="headers"
          :items="items"
          :sort-by="['Название', 'Цена']"
          :sort-desc="[false, true]"
          class="elevation-1"
      >
        <template v-slot:item.image="{ item }">
          <v-chip
          >
            <img :src=" item.image ">
          </v-chip>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn
              depressed
              color="error"
              @click="deleteItem(item)"
          >
            УДАЛИТЬ
          </v-btn>
        </template>
      </v-data-table>

      <v-dialog v-model="dialogDelete" max-width="500px" overlay-color="#CBF1F5">
        <v-card>
          <v-card-title class="headline">Вы уверены, что хотите удалить товар?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">НЕТ</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">ДА</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import SearchFieldAndAddButton from "@/components/SearchFieldAndAddButton";

export default {
name: "ShopTable",
  components: {SearchFieldAndAddButton
  },
  data: () => ({
    dialogDelete: false,
    items:[],
    editedItem: {},
    defaultItem: {},
    headers: [
      {
        sortable: false,
        value: 'image',
      },
      { text: 'Название', value: 'name' },
      { text: 'Описание', value: 'description', sortable: false },
      { text: 'Цена', value: 'price' },
      {text: 'Действие', value: 'action'}
    ]
  }),

  mounted() {
    this.axios
        .get('http://localhost:9000/item')
        .then(response => {this.items = response.data
          console.log(response)
        })
  },

  methods:{
    deleteItem: function (item){
      this.dialogDelete = true
      this.editedItem = Object.assign({},item)
    },
    closeDelete: function(){
      this.editedItem = Object.assign({}, this.defaultItem)
      this.dialogDelete = false
    },
    deleteItemConfirm: function(){
      this.axios
          .post('http://localhost:9000/deleteItem', this.editedItem)
          .then(response => {
            this.items = response.data
          })
          .catch(error => console.log(error))
      this.closeDelete()
    }
  }
}
</script>

<style>

</style>