const express = require('express')

const router = express.Router()

const data = require('../data.json')

router.get('/', (req, res) => {
    const id = req.params.id
    const people = data.people.find(item => item.id == id)

    const viewData = {
        name: people.name,
        drink: people.drink,
        sugar: people.sugar,
        milk: people.milk
    }

    const template = 'views/partials/profile'
    res.render('partials/profile.hbs', viewData)
})

module.exports = router