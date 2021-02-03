<template>
  <div>
    <v-text-field
        label="Поиск"
        outlined
        dense
        v-model="search"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "SearchFieldInShop",
  computed:{
    search:{
      get(){
        return this.$store.state.textFieldSearchItem
      },
      set(text){
        this.$store.commit('sortAllItems',text)
      }
    }
  }
}
</script>

<style scoped>

</style>