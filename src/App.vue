<template>
  <v-app>
<div>
<MainPage/>
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
        multi-sort
        class="elevation-1"
    >
      <template v-slot:item.image="{ item }">
        <v-chip
        >
          <img :src=" item.image ">
        </v-chip>
      </template>
    </v-data-table>
  </template>
</div>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  name: 'App',
  components: {MainPage,
  },

  /*data: () => ({
   //
  }),*/
  data(){
    return{
      items:[],
      headers: [
        {


          sortable: false,
          value: 'image',
        },
        { text: 'Название', value: 'name' },
        { text: 'Описание', value: 'description', sortable: false },
        { text: 'Цена', value: 'price' },
      ]
    }
  },
  mounted() {
    this.axios
    .get('http://localhost:9000/item')
    .then(response => this.items = response.data)
  }
};
</script>
