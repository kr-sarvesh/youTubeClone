import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    setVideos(json.items)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className='flex flex-wrap px-5 w-[80rem] '>
      {videos.map((video) => (
        <Link to={`/watch?v= ${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
