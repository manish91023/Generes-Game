

import React, { useEffect } from 'react'

const GamesByGenresid = ({gameList}) => {
    useEffect(()=>{
        console.log("gameList",gameList)
    },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white'>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>

        {gameList.map((item)=>(
            <div className='bg-gray-600 p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
            <img src={item.background_image}
             className='w-full h-[80%] rounded-xl object-cover' />
            <h2 className='text-[20px] text-white font-bold'>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
            <h2>⭐{item.rating}💬{item.reviews_count}🔥{item.suggestions_count}</h2>
            </div>   
        ))}
    </div>
    </div>

  )
}

export default GamesByGenresid