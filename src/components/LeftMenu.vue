<template>
  <v-navigation-drawer
      absolute
      temporary
      width="180px"
      v-model = drawer
  >

    <v-list
        nav
        dense
    >
      <v-list-item-group

          active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-avatar color="indigo"
                    size="68"
          >

            <img
                src="https://avatars0.githubusercontent.com/u/60842252?s=460&u=f18ef2a47b130b7a1c703ee5311fd350c25c8c57&v=4">
          </v-avatar>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item to="/shop">
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Магазин</v-list-item-title>
        </v-list-item>
        <v-list-item to="/cart">
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Корзина</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Контакты</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftMenu",

  data:()=>({
    drawer:true
  }),

  mounted() {
    console.log('Дочерний элемент = ' + this.drawer)
  },
  watch: {
    drawer: function () {
      console.log('Дочерний элемент = ' + this.drawer)
      this.$emit('changePr', this.drawer)
    }
  }


}
</script>

<style scoped>

</style>