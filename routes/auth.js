const { Router } = require('express');
const { newUser, login, renewToken } = require('../controllers/auth.controllers');

const router = Router();

router.post('/new', newUser)

router.post('/', renewToken)

router.get('/renew', login)



module.exports = router;