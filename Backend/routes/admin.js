const { Router } = require("express");
const {Admin,Issue} =require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
// Admin Routes


router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const email = req.body.email;
    const password = req.body.password;
    const phonenumber = req.body.phonenumber
    const user = await Admin.find({
        email,
        password,
        
    })
    if(user.length!=0){
        const token =  jwt.sign({
            email
        },JWT_SECRET);
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message:"Incorrect email and pass"
        })
    }
});



router.post('/issue', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const department = req.body.department;
    const issue = req.body.issue;
    const labNo = req.body.labNo;
    const status = req.body.status; 
    const newIssue = await Issue.create({
        department:department,
        issue:issue,
        labNo:labNo,
        status:status
    })
    console.log(issue);
    res.json({
        message:'Issue created successfully',issueId: newIssue._id
    })

});
router.get('/showIssue', async(req,res) => {

    const response = await Issue.find({});
    console.log(response);
    res.json({
        issue: response
    })
})

module.exports = router;