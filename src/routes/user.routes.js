const express = require('express');
const router = express.Router();
const userApp = require('../application/user.app');

router.get('/', userApp.getAll);
router.get('/:id', userApp.getById);
router.post('/', userApp.create);
router.put('/:id', userApp.update);
router.delete('/:id', userApp.remove);

module.exports = router;