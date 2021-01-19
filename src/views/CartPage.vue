<template>
  <div>
    <h1>Корзина</h1>
    <v-data-table
        :headers="headers"
        :items="items"
        :sort-by="['Название', 'Цена']"
        :sort-desc="[false, true]"
        class="elevation-1"
    >
      <template v-slot:item.image="{ item }" >
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
        <v-btn
            depressed
            color="orange"
            @click="editItem(item)"
        >
          Изменить
        </v-btn>
      </template>

    </v-data-table>
  </div>


</template>

<script>
export default {
name: "CartPage"
}
</script>

<style scoped>

</style>