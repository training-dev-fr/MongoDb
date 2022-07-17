const express = require('express');
const router = express.Router();
const commentCtrl = require('../controller/comment.controller')

router.get('/:id', commentCtrl.getAllByPostId)
router.post('/', commentCtrl.create)
router.delete('/:id', commentCtrl.delete)


module.exports = router;