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

    getFlag(flag){
      if(flag == 'it'){
        return "https://flagicons.lipis.dev/flags/4x3/it.svg"
      }else if (flag == 'en'){
        return "https://flagicons.lipis.dev/flags/4x3/gb.svg"
      }else if (flag == 'ja'){
        return "https://flagicons.lipis.dev/flags/4x3/jp.svg"
      }
      else{
        return `https://flagicons.lipis.dev/flags/4x3/xx.svg`
      }
    },

    getPsot(post){
       return 'https://image.tmdb.org/t/p/original' + post
    },

    getTv(Tv){
       return 'https://image.tmdb.org/t/p/original' + Tv
    },
    averageVote(vote){
        vote = Math.ceil(vote / 2)
        if(vote == 0){
            vote = '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'
        return vote
    }},
    averageVote(vote){
        vote = Math.ceil(vote / 2)
        if(vote == 1){
            vote = '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'
        return vote
    }},
    averageVote(vote){
        vote = Math.ceil(vote / 2)
        if(vote == 2){
            vote = 
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'
        return vote
    }},
    averageVote(vote){
        vote = Math.ceil(vote / 2)
        if(vote == 3){
            vote = 
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-regular fa-star"></i>'+
            '<i class="fa-regular fa-star"></i>'
        return vote
    }},
    averageVote(vote){
        vote = Math.ceil(vote / 2)
        if(vote == 4){
            vote = 
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-regular fa-star"></i>'
        return vote
    }},
    averageVote(vote){
        vote = Math.ceil(vote / 2)
        if(vote == 5){
            vote = 
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'+
            '<i class="fa-solid fa-star" style="color: #ffe45c;"></i>'
        return vote
    }}
  },
  props: {
  }
}
</script>

<template>
  <input v-model="store.searchText" type="text" placeholder="scrivi il titolo ">
  <button @click="search()">Cerca</button>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    Film
                </h2>
            </div>
            <div class="col-4" v-for="(movie, i) in store.movies" :key="i"> 
                
                <div>
                    {{ movie.title }}
                </div> 
                <div>
                    {{ movie.original_title}}
                </div> 
                <div>
                    <img :src="getFlag(movie.original_language)" :alt="store.original_language">
                    {{  }}
                </div> 
                <div v-html="averageVote(movie.vote_average)">
                    
                </div>
                <div>
                    <img id="post-film" :src="getPsot(movie.poster_path)" alt="">
                    {{ }}
                </div>
                <hr>
            </div>
        </div>
    </div>
          <hr>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    Series
                </h2>
            </div>
            <div class="col-4" v-for="(serie, i) in store.series" :key="i"> 
                
                <div>
                    {{ serie.name }}
                </div> 
                <div>
                    {{ serie.original_name }}
                </div> 
                <div>
                    <img :src="getFlag(serie.original_language)" :alt="store.original_language">
                    {{  }}
                </div> 
                <div>
                    {{ serie.vote_average}}
                </div>
                <div>
                    <img id="post-film" :src="getTv(serie.poster_path)" alt="">
                    {{ }}
                </div>
            </div>
            
        </div>
    </div>
        
</template>


<style>
img{
  width: 30px;
}
#post-film{
    width:200px;
}
</style>