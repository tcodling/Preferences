const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('partials/profile.hbs')
})

module.exports = router