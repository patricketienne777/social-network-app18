const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
  updateStudent // Add missing import for updateStudent
} = require('../../controllers/studentController');

// /api/students
router.route('/')
  .get(getStudents)
  .post(createStudent);

// /api/students/:studentId
router.route('/:studentId')
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments')
  .post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId')
  .delete(removeAssignment);

module.exports = router;
