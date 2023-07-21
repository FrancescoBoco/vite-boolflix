<script>


import {store} from '../store'


export default {
  data(){
    return{
      store,
    }
  },
  methods: {
    

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
        return vote = Math.ceil(vote / 2)
    },
    emptyVote(vote){
        return vote = Math.ceil(4 - (vote / 2))
    }
}}

</script>

<template>
<div class="wrapper ">
 <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    Film
                </h2>
            </div>
            <div class="col-3" v-for="(movie, i) in store.movies" :key="i"> 
            <div class="wrapper-card">
                <div class="back-card">
                    <div>
                        {{ movie.title }}
                    </div> 
                    <div>
                        {{ movie.original_title}}
                    </div> 
                    <div>
                        <img class="flag" :src="getFlag(movie.original_language)" :alt="store.original_language">
                    </div> 
                    <div>
                        <span v-for="numero in averageVote(movie.vote_average)" :key="numero">
                            <i class="fa-solid fa-star" style="color: #ffd877;"></i>
                        </span>
                        <span v-for="numero in emptyVote(movie.vote_average)" :key="numero">
                            <i class="fa-regular fa-star"></i>
                        </span>
                    </div>
                </div>
                
                    <div class="front-card">
                        <img id="post-film" :src="getPsot(movie.poster_path)" alt="">
                    </div>
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
                <div class="back-card">
                    <p>
                    {{ serie.name }}
                    </p> 
                    <div>
                        {{ serie.original_name }}
                    </div> 
                    <div class="flag-img">
                        <img :src="getFlag(serie.original_language)" :alt="store.original_language">
                        {{  }}
                    </div> 
                    <div>
                        {{ serie.vote_average}}
                    </div>
                    <div>
                        <span v-for="numero in averageVote(serie.vote_average)" :key="numero">
                            <i class="fa-solid fa-star" style="color: #ffd877;"></i>
                        </span>
                        <span v-for="numero in emptyVote(serie.vote_average)" :key="numero">
                            <i class="fa-regular fa-star"></i>
                        </span>
                    </div>
                </div>
                
                <div class="">
                    <img id="post-film" :src="getTv(serie.poster_path)" alt="">
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped >
.wrapper *{
    color: white;
} 
.wrapper{
    background-color: #141414;
}
#post-film{
    max-width: 100%;
}
.flag{
    width: 30px;
}
.back-card{
      display: none;
}
.wrapper-card{
    height: 300px;
    width: 200px;
}
.wrapper-card:hover .front-card{
        display: none;
   
}
.wrapper-card:hover .back-card{
    display: block;
}
</style>