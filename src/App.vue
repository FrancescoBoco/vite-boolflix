

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios  from 'axios';
import {store} from './store'



export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer,
  },
  data(){
    return{
        store,
    }
  },
  methods: {

  },
  created(){
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=21113d2a59214cb58de84d087e9a0b2d&query=`, {
      params:{
        api_key: '21113d2a59214cb58de84d087e9a0b2d',
        query: this.store.searchText
      }
        }).then(response => {
          console.log(response)

      });
  }}
</script>

<template>
  <Header />

  <Main/>
 
  <Footer/>
</template>

<style lang="scss" >
@use "./assets/scss/main.scss";
</style>
