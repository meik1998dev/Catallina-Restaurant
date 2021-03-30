const express = require('express')
const menuController = require("../controllers/menuController");


//define Router Middleware
const router = express.Router();




//route method to chain all crud methods to the same route(url)
router.route('/')
    .get(menuController.getMenu)

module.exports = router;