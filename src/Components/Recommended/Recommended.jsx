import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { Link } from 'react-router-dom'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'


const Recommended = ({categoryId}) => {

   const [apiData,setApiData] = useState([]);

   const fetchData = async () => {
    
     const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
     await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));

   }

   useEffect(()=>{
     fetchData();
   },[categoryId])


  return (
    <div className='recommended'>
       {apiData.map((item,index)=>{
          return (
            <div key={index} className="side-vdeo-list">
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid-info">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{item.statistics.viewCount} Views</p>
              </div>
            </div>
          )
       })}
    </div>
  )
}

export default Recommended
