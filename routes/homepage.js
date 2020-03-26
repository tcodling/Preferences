const express = require('express')
const router = express.Router()

const data = require('../data.json')

router.get('/', (req, res) => {
    const viewData = {
        people: data.people 
    }
    res.render('partials/index.hbs', viewData)
})

module.exports = router