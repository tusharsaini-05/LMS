const { Router } = require("express");
const {Issue} =require("./index");
const router = Router();

router.get('/', async(req,res) => {

    const response = await Issue.find({});
    console.log(response);
    res.json({
        issue: response
    })
})

module.exports = router;
