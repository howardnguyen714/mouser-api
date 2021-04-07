// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.hotel.index);
router.get('/:id', ctrl.hotel.show);
router.post('/', ctrl.hotel.create);
router.put('/:id', ctrl.hotel.update);
router.delete('/:id', ctrl.hotel.destroy);

// exports
module.exports = router;
