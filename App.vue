<template>
  <v-app>
    <ToolBarAndLeftMenu/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import ToolBarAndLeftMenu from "@/components/bar_leftmenu/ToolBarAndLeftMenu";

export default {
name: "App",
  components:{ToolBarAndLeftMenu}
}
</script>

<style scoped>

</style>