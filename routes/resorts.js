// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.resort.index);
router.get('/:id', ctrl.resort.show);
router.post('/', ctrl.resort.create);
router.put('/:id', ctrl.resort.update);
router.delete('/:id', ctrl.resort.destroy);
router.post('/:id/createTag', ctrl.resort.createTag)
router.post('/:id/upvoteTag', ctrl.resort.upvoteTag)
router.post('/:id/createTip', ctrl.resort.createTip)
router.post('/:id/upvoteTip', ctrl.resort.upvoteTip)

// exports
module.exports = router;
