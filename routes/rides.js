// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.ride.index);
router.get('/:id', ctrl.ride.show);
router.post('/', ctrl.ride.create);
router.put('/:id', ctrl.ride.update);
router.delete('/:id', ctrl.ride.destroy);

// exports
module.exports = router;
