<script>
import {store} from '../store'
import axios  from 'axios';
// FONT AWESOME


export default {
  data(){
    return{
      store,
    }
  },
  methods: {
getPopularMovies(){
    axios.get(`https://api.themoviedb.org/3/discover/movie?certification=popular`, {
      params:{
        api_key: '21113d2a59214cb58de84d087e9a0b2d',
      }
        }).then(response => {
          console.log(response.data)
          this.store.movies = response.data.results
      })
    },
   
    search(){
      console.log(this.store.searchText)

      axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params:{
        api_key: '21113d2a59214cb58de84d087e9a0b2d',
        query: this.store.searchText
      }
        }).then(response => {
          console.log(response.data)
          this.store.movies = response.data.results
      });
      axios.get(`https://api.themoviedb.org/3/search/tv`, {
      params:{
        api_key: '21113d2a59214cb58de84d087e9a0b2d',
        query: this.store.searchText
      }
        }).then(response => {
          console.log(response.data)
          this.store.series = response.data.results
      });
    },
},
created(){
    this.getPopularMovies()
}
}
</script>

<template>
<div class="wrapper">


    <div class="container">
        <div class="row  justify-content-between">
            <div class="col-auto logo ">
                <img src="https://cineguru.screenweek.it/wp-content/uploads/2021/01/netflix-logo.jpg" alt="">
            </div>
            <div class="col-auto">
                <input v-model="store.searchText" type="text" placeholder="scrivi il titolo ">
                <button @click="search()">Cerca</button>
            </div>
        </div>
    </div>
</div>
   
        
</template>


<style lang="scss" scoped >
.wrapper{
    background-color: #141414;
}
.logo{
  width: 100px;
}
img{
  width: 100px;
}

</style>