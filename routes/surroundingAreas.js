// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.surroundingArea.index);
router.get('/:id', ctrl.surroundingArea.show);
router.post('/', ctrl.surroundingArea.create);
router.put('/:id', ctrl.surroundingArea.update);
router.delete('/:id', ctrl.surroundingArea.destroy);

// exports
module.exports = router;
