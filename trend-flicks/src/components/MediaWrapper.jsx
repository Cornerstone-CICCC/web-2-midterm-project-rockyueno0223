import React from 'react'
import MediaThumbnail from './MediaThumbnail'

const MediaWrapper = ({type, mediaData}) => {
  return (
    <div className='px-4 mb-6'>
      <p className='w-full text-left pl-4 text-2xl mb-2 font-semibold'>{type}</p>
      <div className='w-full overflow-x-auto'>
        <div className='flex flex-row space-x-3'>
          {mediaData.slice(0, 20).map((media, index) => (
            <MediaThumbnail key={index} media={media} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MediaWrapper
