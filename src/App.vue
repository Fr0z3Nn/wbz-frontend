<template>
  <v-app>
<div>
<MainPage/>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-center">

        </th>
        <th class="text-center">
          Название
        </th>
        <th class="text-center">
          Описание
        </th>
        <th class="text-center">
          Цена
        </th>
        <th class="text-center">
          Действие
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in info"
          :key="item.name"
      >
        <td><img
            src="https://cdn2.scratch.mit.edu/get_image/user/22140082_60x60.png">
        </td>
        <td class="text-center">{{ item.name }}</td>
        <td class="text-center">{{ item.description }}</td>
        <td class="text-center">{{ item.price }}</td>

        <td>
          <v-row
              align="center"
              justify="space-around"
          >
          <v-btn color="orange">
            <v-icon left>
              mdi-cart
            </v-icon>
            ADD TO CART
          </v-btn>
          </v-row>
        </td>

      </tr>
      </tbody>
    </template>
  </v-simple-table>
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
      info:[]
    }
  },
  mounted() {
    this.axios
    .get('http://localhost:9000/item')
    .then(response => this.info = response.data)
  }
};
</script>
