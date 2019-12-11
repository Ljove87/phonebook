import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newPerson => {
    return axios.post(baseUrl, newPerson)
}

const update = async (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    const response = await request
    return response.data
  }

const delPerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, update, delPerson}
