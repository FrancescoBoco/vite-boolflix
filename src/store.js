import {reactive} from 'vue'

export const store = reactive({
    loading: true,
    searchText: "",
    movies: [],
    series: [],
})