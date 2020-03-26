const express = require('express')
const router = express.Router()
const fs = require('fs')

const data = require('../data.json')

router.get('/', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        data = JSON.parse(data)
        if (err) console.log('An error has occurred')
        const viewData = {
            people: data.people 
        }
        res.render('partials/index.hbs', viewData)
    })
})

router.post('/', (req, res) => {
    const newPerson = {
        name: req.body.name,
        image: "/images/default.jpg",
        drink: req.body.drink,
        sugars: req.body.sugars,
        milk: req.body.milks
    }
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) console.log('An error has occurred')
        data = JSON.parse(data)
        data.people.push(newPerson)
        const dataString = JSON.stringify(data, null, 2)
        console.log(dataString)
        fs.writeFile('./data.json', dataString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
                res.redirect('/')
            }
        })
    }
)})

module.exports = router