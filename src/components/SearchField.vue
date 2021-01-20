<template>
  <div>
    <v-text-field
        label="Поиск"
        outlined
        dense
        v-model="text"
        @keyup.enter="findItem"
    ></v-text-field>
  {{text}}
  </div>
</template>

<script>
export default {
name: "SearchFieldInShop",
  data:() =>({
        text: ''
      }),
  methods:{
  findItem: function (){
    this.text = "123123"
  }
  }
}
</script>

<style scoped>

</style>