import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = async newPerson => {
    const response = await axios.post(baseUrl, newPerson)
    return response.data
  }

const update = async (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    const response = await request
    return response.data
  }

const del = id => axios.delete(`${baseUrl}/${id}`);

export default {getAll, create, update, del}
