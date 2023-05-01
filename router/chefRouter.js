const router = require('express').Router()
const chefs = require('../chefsData/chefdata.json')


// Getting individual chef's


// Getting the all chef's;
router.get('/all',(req,res)=>{
    res.send(chefs)
})


// Not found Routes;
router.get('*',(req,res)=>{
    res.send({
        message:"404 Error ! Page Not found...",
        admin:"Minhazul Abedin Munna"
    })
})

module.exports = router;