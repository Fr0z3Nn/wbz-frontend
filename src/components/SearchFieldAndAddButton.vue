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
import SearchField from "@/components/SearchField";
import AddItemButton from "@/components/AddItemButton";
export default {
name: "SearchFieldAndAddButton",
  components:{SearchField,AddItemButton
  },
}
</script>

<style scoped>

</style>