require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
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

app.get('/api/persons/:id', (req, res, next) => {
   Person
   .findById(req.params.id)
   .then(person => person ? res.json(person.toJSON()) : res.status(404).end())
   .catch(e => next(e))
})

app.delete('/api/persons/:id', (req,res,next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(() => {
        res.status(204).end()
      })
    .catch(error => next(error))
})


// create person in phonebook
app.post('/api/persons', (req, res, next) => {

    const body = req.body

    if (!body.name) {
         return res.status(400).json({
             error: 'name is missing'
         })
    } else if (!body.number) {
         return res.status(400).json({
            error: 'number is missing'
         })
    }
    

    const person = new Person ({
        name: body.name,
        number: body.number,
    });
    
    person
    .save()
    .then(savedPerson => {
        res.json(savedPerson.toJSON());
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body;

    const person = {
        name: body.name,
        number: body.number,
    }

    Person
        .findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => res.json(updatedPerson.toJSON()))
        .catch(e => next(e))
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
    console.log(error.message);
    if (error.name === 'CastError' && error.kind === 'ObjectID') {
        return res.status(404).send({ error: 'Malformatted ID' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
      }
    

    next(error);
}

app.use(errorHandler);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
