// Les modules
const
    express = require("express"),
    router = express.Router()

// Les controllers
const
    controller = require("./controllers/controller")

router.route('/')
    .get(controller.home)
    .post(controller.search)

module.exports = router