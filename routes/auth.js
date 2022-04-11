const { Router } = require('express');
const { newUser, login, renew } = require('../controllers/auth.controllers');

const router = Router();

router.post('/new', newUser)

router.post('/', renew)

router.get('/renew', login)



module.exports = router;