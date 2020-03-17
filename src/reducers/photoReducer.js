import photoService from '../services/photos'

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_PHOTO':
      return [...state, action.data]
    case 'INIT_PHOTOS':
      return action.data
    default:
      return state
  }
}

export const initializePhotos = () => {
  return async dispatch => {
    const photos = await photoService.getAll()
    dispatch({
      type: 'INIT_PHOTOS',
      data: photos,
    })
  }
}

export const createPhoto = content => {
  return async dispatch => {
    const newPhoto = await photoService.create(content)
    dispatch({
      type: 'NEW_PHOTO',
      data: newPhoto,
    })
  }
}

export default photoReducer
