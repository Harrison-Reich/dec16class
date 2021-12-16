const router = require('express').Router()

router.use('/api', require('./favoritesongs.js'))

module.exports = router
