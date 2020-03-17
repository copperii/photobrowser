import React, { useEffect } from 'react'
import { Section } from '../styles/globalStyle'
import { useDispatch } from 'react-redux'
import { initializePhotos } from '../reducers/photoReducer'
import AllPhotos from '../components/allPhotos'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializePhotos())
  }, [dispatch])

  return (
    <Section>
      <AllPhotos />
    </Section>
  )
}

export default App
