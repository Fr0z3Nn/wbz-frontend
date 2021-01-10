<template>
  <v-app>
<div>
<MainPage/>
  {{info}}
</div>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  name: 'App',
  components: {MainPage,
  },

  /*data: () => ({
   //
  }),*/
  data(){
    return{
      info:[]
    }
  },
  mounted() {
    this.axios
    .get('http://localhost:9000/item')
    .then(response => this.info = response.data)
  }
};
</script>
