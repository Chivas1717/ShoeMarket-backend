const Router = require('express')

const router = new Router()
const deviceController = require('../controllers/itemController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getItem)

module.exports = router