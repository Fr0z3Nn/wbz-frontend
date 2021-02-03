<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <SearchField/>
        </v-col>
        <v-col
            sm="1"
            align="right">
          <AddItemButton/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchField from "@/components/search_add/SearchField";
import AddItemButton from "@/components/search_add/AddItemButton";

export default {
  name: "SearchFieldAndAddButton",
  components: {
    SearchField, AddItemButton
  },
}
</script>

<style scoped>

</style>