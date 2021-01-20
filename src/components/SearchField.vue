<template>
  <div>
    <v-text-field
        label="Поиск"
        outlined
        dense
        v-model="text"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "SearchFieldInShop",
  data: () => ({
    text: '',
  }),
  watch:{
    text: function (){
      this.sendItemsAfterSearch(this.text)
    }
  },
  methods: {
    /*findItem: function () {
      this.axios
          .post('http://localhost:9000/api/item/search/' + this.text)
          .then(response => {
           this.sendItemsAfterSearch( response.data)
          })
          .catch(error => console.log(error))
    },*/
    sendItemsAfterSearch: function (text){
      this.$emit('searchResultFromField', text)
    }
  }
}
</script>

<style scoped>

</style>