const express = require('express')
const adminController = require("../controllers/adminController");
const usersController = require("../controllers/usersController");

//define Router Middleware
const router = express.Router();

// validateUser befor getMenu and add
router.route('/').get(usersController.validateUser, adminController.getMenu).post(usersController.validateUser, adminController.add)
router.route('/:id').post(usersController.validateUser, adminController.deleteItem)
module.exports = router;