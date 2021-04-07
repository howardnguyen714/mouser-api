// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.show.index);
router.get('/:id', ctrl.show.show);
router.post('/', ctrl.show.create);
router.put('/:id', ctrl.show.update);
router.delete('/:id', ctrl.show.destroy);

// exports
module.exports = router;
