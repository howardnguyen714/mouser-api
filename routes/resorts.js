// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.resort.index);
router.get('/:id', ctrl.resort.show);
router.post('/', ctrl.resort.create);
router.put('/:id', ctrl.resort.update);
router.delete('/:id', ctrl.resort.destroy);

// exports
module.exports = router;
