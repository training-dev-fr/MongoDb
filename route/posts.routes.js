const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();

const postsCtrl = require('../controller/posts.controller');

router.get('/', auth, postsCtrl.getAll)
router.get('/:id', auth, postsCtrl.getOne)
router.post('/', auth, postsCtrl.create)
router.put('/:id', auth, postsCtrl.update)
router.delete('/:id', auth, postsCtrl.delete)

module.exports = router;