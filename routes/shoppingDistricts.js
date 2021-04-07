// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.shoppingDistrict.index);
router.get('/:id', ctrl.shoppingDistrict.show);
router.post('/', ctrl.shoppingDistrict.create);
router.put('/:id', ctrl.shoppingDistrict.update);
router.delete('/:id', ctrl.shoppingDistrict.destroy);

// exports
module.exports = router;
