const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/usercontrollers')

router.post('/', userControllers.Create);
module.exports = router;
