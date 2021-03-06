const express = require('express')
const OtakuController = require('../controllers/MainController')
const NimeController = require('../controllers/NimeController')

const router = express.Router()

router.get('/pagehome', NimeController.home)
router.get('/page/:page', NimeController.home)
router.get('/blog/', NimeController.blog)
router.get('/blog/read/:id', NimeController.readblog)
router.get('/blog/:page', NimeController.blog)
router.get('/anime/:id', NimeController.anime)
router.get('/anime/eps/:link', NimeController.readanime)
router.get('/search/:title', NimeController.search)
router.get('/search/:title/:page', NimeController.searchByPage)
router.get('/season/', NimeController.season)
router.get('/date-release/', NimeController.date)
router.get('/list-anime/', NimeController.listWithoutPage)
router.get('/list-anime/:page', NimeController.listWithPage)
router.get('/genre/:genre/page/:page', NimeController.searchByGenre)
router.get('/tag/:tag', NimeController.tag)
router.get('/blog-category/:category', NimeController.blogcategory)
router.get('/blog-category/:category/:page', NimeController.blogCategoryByPage)
router.get('/genre-list', NimeController.daftarGenre)

router.get('/:portal/search/:query', OtakuController.search)
router.get('/:portal/anime/:id', OtakuController.animeDetail)

module.exports = router
