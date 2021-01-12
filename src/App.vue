<template>
  <v-app>
<div>

<ToolBarAndLeftMenu/>
  <ShopTable/>

</div>
  </v-app>
</template>

<script>
import ToolBarAndLeftMenu from './components/ToolBarAndLeftMenu';
import ShopTable from "@/components/ShopTable";

export default {
  name: 'App',
  components: {ToolBarAndLeftMenu,ShopTable
  },

  data: () => ({
   //
  }),

};
</script>
