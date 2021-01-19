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
          <AddItemButton @itemListenerFromButton="sendNewItemsList"/>
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
  components: {
    SearchField, AddItemButton
  },
  data: () => ({
    items: []
  }),
  methods: {
    sendNewItemsList: function (items) {
      this.$emit('itemListenerFromPanel', items)
    }
  }
}
</script>

<style scoped>

</style>