const express = require('express')
const router = express.Router()
const fs = require('fs')

const data = require('../data.json')

router.get('/', (req, res) => {
    const viewData = {
        people: data.people 
    }
    res.render('partials/index.hbs', viewData)
})

router.post('/', (req, res) => {
    const newPerson = {
        name: req.body.name,
        drink: 'Coffee',
        sugar: 1,
        milk: 1
    }
    data.people.push(newPerson)
    const dataString = JSON.stringify(data)
    fs.writeFile('../data.json', dataString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.redirect('/')
})

module.exports = router