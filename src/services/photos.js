import axios from 'axios'
const baseUrl =
  'https://jsonplaceholder.typicode.com/photos?_start=50&_limit=150'
// const baseUrl = 'https://jsonplaceholder.typicode.com/photos'
// const baseUrl = process.env.REACT_APP_APIURI + path
// const baseUrl = 'http://localhost:3001/photos'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const response = await axios.post(`${baseUrl}/`, newObject)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}/`, newObject)
  return response.data
}

const remove = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.status
}

export default {
  getAll,
  create,
  update,
  remove,
}
