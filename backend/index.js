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

app.get('/api/persons/:id', (req, res) => {
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

app.post('/api/persons', (req, res) => {

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

    //  const name = req.body.name
    //   if (body.name === name ) {
    //       return res.status(400).json({
    //           error: 'that name is already in persons list'
    //       })
    //   }
    

    const person = new Person ({
        name: body.name,
        number: body.number,
    });
    
    person
    .save()
    .then(savedPerson => {
        res.json(savedPerson.toJSON());
    })
})




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
