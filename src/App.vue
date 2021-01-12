<template>
  <v-app>
<div>
<MainPage/>
  <ShopTable/>
</div>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';
import ShopTable from "@/components/ShopTable";

export default {
  name: 'App',
  components: {MainPage,ShopTable
  },

  data: () => ({
   //
  }),

};
</script>
