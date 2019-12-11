const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-4jmrr.mongodb.net/phonebook_app?retryWrites=true&w=majority
  `

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    phone: String,
    date: Date,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: "Teodora Jovanovc",
    phone: "41-41-555",
    date: new Date()
})


Person
.find({})
.then(result => {
    result.forEach( person => {
        console.log(person)
    })
    mongoose.connection.close()
})
// person
// .save()
// .then(response => {
//     console.log('person saved')
//     mongoose.connection.close()
// })
