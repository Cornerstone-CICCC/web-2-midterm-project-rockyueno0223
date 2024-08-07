import React from 'react'
import MediaThumbnail from './MediaThumbnail'

const MediaWrapper = ({type, mediaData}) => {
  return (
    <div>
      <p className='w-full text-left pl-4'>{type}</p>
      <div className='w-full overflow-x-auto'>
        <div className='flex flex-row'>
          {mediaData.slice(0, 20).map((media, index) => (
            <MediaThumbnail key={index} media={media} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MediaWrapper
