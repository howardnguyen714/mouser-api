// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.park.index);
router.get('/:id', ctrl.park.show);
router.post('/', ctrl.park.create);
router.put('/:id', ctrl.park.update);
router.delete('/:id', ctrl.park.destroy);

// exports
module.exports = router;
