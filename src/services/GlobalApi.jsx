import axios from 'axios';
const key="61b666b9d8b341c9b3267176d358bd9e"
const axiosCreate=axios.create({
    baseURL:"https://api.rawg.io/api"

})
const getGenreList=axiosCreate.get("/genres?key="+key)
const getAllGames=axiosCreate.get("/games?key="+key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}