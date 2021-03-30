const express = require('express')
const indexController = require("../controllers/indexController");


//define Router Middleware
const router = express.Router();




//route method to chain all crud methods to the same route(url)
router.route('/')
    .get(indexController.getMenu)

module.exports = router;