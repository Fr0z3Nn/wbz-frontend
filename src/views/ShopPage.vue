<template>
  <v-app>
    <div>

      <ShopTable/>

    </div>
  </v-app>
</template>

<script>

import ShopTable from "@/components/ShopTable";

export default {
  name: 'ShopPage',
  components: {ShopTable
  },

  data: () => ({
    //
  }),

};
</script>

