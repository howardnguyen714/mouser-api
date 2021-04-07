// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.dining.index);
router.get('/:id', ctrl.dining.show);
router.post('/', ctrl.dining.create);
router.put('/:id', ctrl.dining.update);
router.delete('/:id', ctrl.dining.destroy);

// exports
module.exports = router;
