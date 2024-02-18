

import React, { useEffect } from 'react'

const TrendingGames = ({gameList}) => {
    useEffect(()=>{
       // console.log(gameList)
    },[])
  return (
    <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {
                gameList.map((item,index)=>index<4&&(
                    <div className='bg-[#76a8f75e] rounded-lg p-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <img src={item.background_image} className='h-[270px] rounded-lg object-cover'/>
                        <h2 className='dark:text-white text-[20px] font-bold'>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TrendingGames