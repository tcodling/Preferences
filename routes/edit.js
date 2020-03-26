const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('partials/edit.hbs')
})


module.exports = router