import React from 'react'
import './Video.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

export const Video = () => {

  const {videoId,categoryId} = useParams();
  return (
    <div className='pley-container'>
         <Playvideo videoId={videoId}/>
         <Recommended categoryId={categoryId}/>
    </div>
  )
}
