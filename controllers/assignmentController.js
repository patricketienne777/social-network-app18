const { Student, Course, Assignment } = require('../models');

const assignmentControllers = {
  // POST create an assignment for a course
  async createAssignment(req, res) {
    try {
      const assignmentData = await Assignment.create(req.body);

      // Add the assignment to the associated course's assignments array
      const courseData = await Course.findByIdAndUpdate(
        req.params.courseId,
        { $push: { assignments: assignmentData } },
        { new: true, runValidators: true }
      );

      if (!courseData) {
        return res.status(404).json({ message: 'No course found with this id!' });
      }

      res.json(courseData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE remove an assignment from a course by assignmentId
  async removeAssignment(req, res) {
    try {
      const assignmentData = await Assignment.findOneAndDelete({
        assignmentId: req.params.assignmentId,
      });

      if (!assignmentData) {
        return res.status(404).json({ message: 'No assignment found with this id!' });
      }

      // Remove the assignment from the associated course's assignments array
      const courseData = await Course.findByIdAndUpdate(
        req.params.courseId,
        { $pull: { assignments: { assignmentId: req.params.assignmentId } } },
        { new: true }
      );

      if (!courseData) {
        return res.status(404).json({ message: 'No course found with this id!' });
      }

      res.json(courseData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = assignmentControllers;
