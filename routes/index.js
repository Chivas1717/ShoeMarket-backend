const Router = require('express')

const router = new Router()

const brandRouter = require('./brandRouter')
const deviceRouter = require('./itemRouter')
const userRouter = require('./userRouter')

router.use('/brand', brandRouter)
router.use('/item', deviceRouter)
router.use('/user', userRouter)

module.exports = router