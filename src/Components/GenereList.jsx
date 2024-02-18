import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi';


const GenereList = ({setGenresId}) => {

  const [genreList,setGenreList]=useState([])
  const [activeIndex,setActiveIndex]=useState(0)

    useEffect(()=>{
      getGenreList();

    },[])

    const getGenreList=()=>{
      GlobalApi.getGenreList.then((res)=>{
        console.log(res.data.results)
        setGenreList(res.data.results)
        
      })
    }
  return (
    <div>
      <h2 className='text-[30px] font-bold dark:text-white'>Genres</h2>
      
      {genreList.map((item,index)=>(
        <div onClick={()=>{setActiveIndex(index);setGenresId(item.id)}}
        className={`flex gap-2 items-center mb-2 hover:bg-gray-300 cursor-pointer p-2  rounded-lg hover:dark:bg-gray-600 group ${activeIndex==index?'bg-gray-300 dark:bg-gray-600':null}`}>

          <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all-ease-out duration-300 ${activeIndex==index?'scale-105':null}`}/>

          <h3 className={`dark:text-white text-[18px] group-hover:font-bold scale-105 transition-all-ease-out duration-300 ${activeIndex==index?'font-bold':null}`}>{item.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default GenereList