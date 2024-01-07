const router = require("express").Router()
const controller = require("../controllers/Controller")

router.get("/", controller.showAll)

module.exports = router