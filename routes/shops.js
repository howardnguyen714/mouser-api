// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.shop.index);
router.get('/:id', ctrl.shop.show);
router.post('/', ctrl.shop.create);
router.put('/:id', ctrl.shop.update);
router.delete('/:id', ctrl.shop.destroy);

// exports
module.exports = router;
