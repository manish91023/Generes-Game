

import React, { useEffect, useState } from 'react'
import GeneraList from '../Components/GenereList';
import GlobalApi from '../services/GlobalApi';
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenresid from '../Components/GamesByGenresid';

const Home = () => {

   const [allGamesList,setAllGameList]=useState()
   const [gameListByGenres,setGameListByGenre]=useState([])

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4)
  },[])
  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((res)=>{
      //console.log(res.data)
      setAllGameList(res.data.results)
    })
  }

  const getGameListByGenresId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((res)=>{
      //console.log("games by genere id",res.data.results)
      setGameListByGenre(res.data.results)
    })
  }
  return (
    <div className="grid grid-cols-4 px-6">
        <div className=" hidden md:block">
            <GeneraList setGenresId={(setGenresId)=>getGameListByGenresId(setGenresId)}/>
        </div>

        <div className="col-span-4 md:col-span-3 ">
          
            {allGamesList?.length>0&&gameListByGenres.length>0?
            <div>
              <Banner gameBanner={allGamesList[7]}/>
              <TrendingGames gameList={allGamesList}/>
              <GamesByGenresid gameList={gameListByGenres}/>
            </div> 
              :null}
            
           
    
        </div>
    </div> 
  )
}

export default Home;