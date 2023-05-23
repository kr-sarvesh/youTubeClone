function VideoCard({ info }) {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div>
      <div className='h-[20rem] p-2 m-2 w-[18rem] shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
        <h3 className='font-bold py-2'>{title}</h3>
        <div>
          <p>{channelTitle}</p>
          <p>{statistics.viewCount} Views</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
