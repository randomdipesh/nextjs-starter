const router = require('express').Router()
router.get('/',(req,res)=>{
	res.send("HEllo api how are you nice s")
})
module.exports = router