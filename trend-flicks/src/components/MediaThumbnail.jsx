import React from 'react'

const MediaThumbnail = ({media}) => {
  return (
    <div className='flex-shrink-0 w-full bg-gray-200'>
      {media.media_type === 'movie' ? media.title : media.name}
    </div>
  )
}

export default MediaThumbnail
