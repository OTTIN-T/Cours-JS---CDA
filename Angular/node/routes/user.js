const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const user_controller = require('../controllers/user.controller');

router.get('/',auth(),user_controller.user_list);
router.post('/register', user_controller.user_register);
router.post('/login', user_controller.user_login);


module.exports = router;