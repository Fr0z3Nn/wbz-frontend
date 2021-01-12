<template>
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
</template>

<script>
export default {
name: "SearchFieldAndAddButton"
}
</script>

<style scoped>

</style>