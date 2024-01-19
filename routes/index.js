var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getRoute', async (req, res) => {
  try{
      
    res.send({"data":"Ran Succesfully"});
  }catch(e){
      res.status(400).send()
  }
})  

module.exports = router;