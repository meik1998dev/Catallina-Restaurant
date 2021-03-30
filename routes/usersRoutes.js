const express = require('express')
const usersController = require("../controllers/usersController");

//define Router Middleware
const router = express.Router();

router.route('/').get(usersController.getLoginForm).post(usersController.authenticate)
module.exports = router;