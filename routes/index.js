const express = require('express')
const OtakuController = require('../controllers/MainController')

const router = express.Router()

router.get('/:portal/search/:query', OtakuController.search)
router.get('/:portal/anime/:id', OtakuController.animeDetail)

module.exports = router
