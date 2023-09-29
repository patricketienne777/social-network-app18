const router = require('express').Router();
const {
  createAssignment,
  removeAssignment,
} = require('../../controllers/assignmentControllers');


router.route('/:courseId')
  .post(createAssignment);


router.route('/:courseId/:assignmentId')
  .delete(removeAssignment);

module.exports = router;