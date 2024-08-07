import React from 'react'

const MediaThumbnail = ({media}) => {
  return (
    <div className='flex-shrink-0 w-full sm:w-1/2 bg-gray-200'>
      <img
        src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
        alt={media.media_type === 'movie' ? media.title : media.name}
        className='w-full h-auto rounded-md cursor-pointer'
      />
    </div>
  )
}

export default MediaThumbnail
