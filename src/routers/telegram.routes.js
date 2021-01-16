const { Router } = require('express')
const router = Router()

const { active, eco } = require('../controller/telegram.controller.js')

router.route('/setwebhook').get(active)

router.route('/webhook').post(eco)

module.exports = router
