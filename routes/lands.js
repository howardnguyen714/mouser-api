// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.land.index);
router.get('/:id', ctrl.land.show);
router.post('/', ctrl.land.create);
router.put('/:id', ctrl.land.update);
router.delete('/:id', ctrl.land.destroy);

// exports
module.exports = router;
