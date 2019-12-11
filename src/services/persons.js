import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
  }

const update = async (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    const response = await request
    return response.data
  }

const del = id => axios.delete(`${baseUrl}/${id}`);

export default {getAll, create, update, del}
