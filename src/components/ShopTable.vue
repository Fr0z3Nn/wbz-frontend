<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
              label="Поиск"
              outlined
              dense
          ></v-text-field>
        </v-col>
        <v-col
            sm="1"
            align="right">
          <v-btn
              color="primary"
              fab
              small
              dark
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <template>
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
            DELETE
          </v-btn>
        </template>
      </v-data-table>
    </template>
  </div>

</template>

<script>
export default {
name: "ShopTable",
  data: () => ({
    items:[],
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
    const a = new Date().getMilliseconds()
    this.axios
        .get('http://localhost:9000/item')
        .then(response => {this.items = response.data
          console.log(response)
        })
    const b = new Date().getMilliseconds()
    console.log('Время ответа - привета ' + (b-a) + ' ms')
  },
  methods:{
    deleteItem: function (item){
      console.log('ВЫВОД')
      console.log(item)

      this.axios
          .post('http://localhost:9000/deleteItem', item)
          .then(response => this.items = response.data)
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>