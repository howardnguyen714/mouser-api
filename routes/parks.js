// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.park.index);
router.get('/:id', ctrl.park.show);
router.post('/', ctrl.park.create);
router.put('/:id', ctrl.park.update);
router.delete('/:id', ctrl.park.destroy);
router.post('/:id/createTag', ctrl.park.createTag)
router.post('/:id/upvoteTag', ctrl.park.upvoteTag)

// exports
module.exports = router;
