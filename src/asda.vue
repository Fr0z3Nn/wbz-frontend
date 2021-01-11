<template>
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
                mdi-pencil
              </v-icon>
              ИЗМЕНИТЬ
            </v-btn>
            <v-btn color="error">
              <v-icon left>
                mdi-delete
              </v-icon>
              Удалить
            </v-btn>
          </v-row>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "asda"
}
</script>

<style scoped>

</style>