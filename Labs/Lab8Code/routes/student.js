let express = require('express');
let router = express.Router();
let Student = require('../models/student');

router.get("/student", function(req, res){
    res.render('student')

})

router.post("/student", function(req, res){

    Student.create(req.body.student, function (err, student) {
        if(err){
            console.error(err);
        }
        else{
            res.redirect('/student/student');
        }
    })
})
module.exports = router;