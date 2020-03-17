import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import { H3, Img } from './allPhotos.styles'

const Photo = ({ showDetail, photo, handleClick }) => {
  if (showDetail) {
    // console.log('showDetail called')

    return (
      <>
        <H3 onClick={handleClick}>{photo.title}</H3>
        <Img onClick={handleClick} src={photo.url} />
      </>
    )
  }
  return (
    <>
      <Img onClick={handleClick} src={photo.thumbnailUrl} />
    </>
  )
}

const AllPhotos = () => {
  const [showDetail, setShowDetail] = useState(false)
  const dispatch = useDispatch()
  const photos = useSelector(({ filter, photos }) => {
    if (filter === 'ALL') {
      return photos
    }
    return photos.filter(photo => photo.id === filter)
  })

  const toggleShowPhoto = id => {
    // console.log('photo with id clicked', id)
    showDetail ? dispatch(filterChange('ALL')) : dispatch(filterChange(id))
    setShowDetail(!showDetail)
  }

  return (
    <ul>
      {photos.map(photo => (
        <Photo
          key={photo.id}
          photo={photo}
          handleClick={() => toggleShowPhoto(photo.id)}
          showDetail={showDetail}
        />
      ))}
    </ul>
  )
}

export default AllPhotos
