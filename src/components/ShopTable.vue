<template>
  <div>
    <SearchFieldAndAddButton @itemListenerFromPanel="changeAfterAdd" @itemSearchFromPanel="changeAfterSearch"/>
    <v-row>
      <v-card v-for="item in itemsShow" :key="item.id"
              class="mx-auto my-12"
              max-width="300"

      >

        <v-card-text v-model="item.name"
        >{{ item.name }}
        </v-card-text>

        <v-img v-model="item.image"
               height="300"
               src="https://f3.mylove.ru/2DUmewzPgj.jpg"
        ></v-img>

        <v-card-title></v-card-title>

        <v-card-text>
          <v-card-text v-model="item.price"
          >{{ item.price }}$
          </v-card-text>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-row>
          <v-col v-if="user.admin">
            <v-card-actions>
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="editItem(item)"
              >
                Изменить
              </v-btn>

            </v-card-actions>
          </v-col>
          <v-col
              align="right"
              v-if="user.admin">
            <v-card-actions>
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="deleteItem(item)"
              >
                Удалить
              </v-btn>

            </v-card-actions>
          </v-col>
          <v-col
              v-if="!user.admin">
            <v-card-actions>
              <v-btn
                  color="deep-purple lighten-2"
                  text
              >
                В КОРЗИНУ
              </v-btn>

            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
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

    <v-dialog v-model="dialogEdit" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Изменить товар:</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="item.name"
                              label="Название*"
                              required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="item.description"
                              label="Описание*"
                              required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="item.price"
                              label="Цена*"
                              required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="item.image"
                              label="Картинка*"
                              required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Обязательные поля</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="closeEdit">Отмена</v-btn>
          <v-btn color="blue darken-1" text @click="editItemConfirm">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import SearchFieldAndAddButton from "@/components/SearchFieldAndAddButton";

export default {
  name: "ShopTable",
  components: {
    SearchFieldAndAddButton
  },
  data: () => ({
    dialogDelete: false,
    dialogEdit: false,
    items: [],
    defaultItem: {},
    text: '',
    item: {
      name: '',
      description: '',
      price: '',
      image: '',
    }
  }),
  computed: {
    itemsShow() {
      return this.items.filter(item => item.name.includes(this.text))
    },
    user() {
      return this.$store.state.user
    },
  },

  mounted() {
    this.axios
        .get('http://localhost:9000/api/item/')
        .then(response => {
          this.items = response.data
          this.items.forEach(n => n.show = true)
        })
  },

  methods: {
    changeAfterAdd(items) {
      this.items = items
    },
    deleteItem: function (item) {
      this.dialogDelete = true
      this.editedItem = Object.assign({}, item)
    },
    closeDelete: function () {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.dialogDelete = false
    },
    deleteItemConfirm: function () {
      this.axios
          .post('http://localhost:9000/api/item/delete/' + this.editedItem.id)
          .then(response => {
            this.items = response.data
          })
          .catch(error => console.log(error))
      this.closeDelete()
    },
    editItem: function (item) {
      this.dialogEdit = true
      this.item = Object.assign({}, item)
    },
    closeEdit: function () {
      this.item = Object.assign({}, this.defaultItem)
      this.dialogEdit = false
    },
    editItemConfirm: function () {
      this.axios
          .post('http://localhost:9000/api/item/edit', this.item)
          .then(response => {
            this.items = response.data
          })
          .catch(error => console.log(error))
      this.closeEdit()
    },
    changeAfterSearch(text) {
      this.text = text
    },
  }
}
</script>

<style>

</style>