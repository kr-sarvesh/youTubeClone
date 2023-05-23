function VideoCard({ info }) {
  // destructuring the info object
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div>
      <div className='h-[20rem] p-2 m-2 w-[18rem] shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
        <h3 className='font-bold py-2'>{title}</h3>
        <div>
          <p>{channelTitle}</p>
          <p>
            {statistics.viewCount} <span className='text-lg'>Views</span>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

// HOC
export const AdVideoCard = ({ info }) => {
  return (
    <div className='p-1 m-1 cursor-pointer border rounded-md border-red-200'>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard
