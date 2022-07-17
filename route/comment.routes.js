const express = require('express');
const router = express.Router();
const commentCtrl = require('../controller/comment.controller')

router.get('/', commentCtrl.getAll)
router.get('/:id', commentCtrl.get)
router.post('/', commentCtrl.create)
router.delete('/:id', commentCtrl.delete)


module.exports = router;