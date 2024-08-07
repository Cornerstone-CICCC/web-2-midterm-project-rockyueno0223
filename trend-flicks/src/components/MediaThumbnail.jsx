import React from 'react'

const MediaThumbnail = ({media}) => {
  return (
    <div>
      {media.media_type === 'movie' ? media.title : media.name}
    </div>
  )
}

export default MediaThumbnail
