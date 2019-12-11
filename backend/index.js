require('dotenv').config()

const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')



const Person = require('./models/person')

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

app.use(requestLogger)



app.get('/api/persons', (req, res) => {
    Person.find({})
    .then(person => {
        res.json(person.map(p => p.toJSON()))
    })
})

app.get('/info', (req, res) => {
    const date = new Date()
    res.send(`Phonebook has info for ${persons.length} people, fetched on ${date}`)

})

app.get('/api/person/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
   
})

app.delete('/api/person/:id', (req,res) => {
    const id = Number(req.params.id)
    person = persons.find(p => p.id !== id)
    console.log(person)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {

    const body = req.body

    const generateId = () => {
            const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0
        return maxId + Math.random() + 1
    }

    if (!body.name) {
         return res.status(400).json({
             error: 'name is missing'
         })
    } else if (!body.number) {
         return res.status(400).json({
            error: 'number is missing'
         })
    } 

    const name = req.body.name
     if (body.name === name ) {
         return res.status(400).json({
             error: 'that name is already in persons list'
         })
     }
    

    const person =  {
        name: body.name,
        number: body.number,
        id: generateId(),
    }
    
    persons = persons.concat(person)

    res.json(person)
})




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
