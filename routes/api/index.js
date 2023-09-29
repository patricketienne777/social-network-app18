const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');
const assignmentRoutes = require('./assignmentRoutes');


router.use('/students', studentRoutes);
router.use('/courses', courseRoutes); 
router.use('/assignment', assignmentRoutes); 


// router.use('/students', studentRoutes);

module.exports = router;
