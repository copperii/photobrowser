import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import { H3, Img, Detail, Section, Thumbnail, Text } from './allPhotos.styles'

const Photo = ({ showDetail, photo, handleClick }) => {
  if (showDetail) {
    return (
      <>
        <Detail>
          <H3 onClick={handleClick}>{photo.title}</H3>
          <Img
            onClick={handleClick}
            src={photo.url}
            alt='Large picture'
            title='Click on the picture to go back'
          />
          <Text>Click the picture to go back.</Text>
        </Detail>
      </>
    )
  }
  return (
    <Thumbnail
      onClick={handleClick}
      src={photo.thumbnailUrl}
      alt='Thumbnail'
      title='Click on the picture for larger view'
    />
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
    showDetail ? dispatch(filterChange('ALL')) : dispatch(filterChange(id))
    setShowDetail(!showDetail)
  }

  return (
    <Section>
      {photos.map(photo => (
        <Photo
          key={photo.id}
          photo={photo}
          handleClick={() => toggleShowPhoto(photo.id)}
          showDetail={showDetail}
        />
      ))}
    </Section>
  )
}

export default AllPhotos
