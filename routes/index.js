var express = require('express');
var router = express.Router();
var sendEventController = require ('../controlers/sendEvent');



router.get('/', function (req, res) {
  res.send("Servicios Exponea!:");
});


router.get('/api/timeZone', async function (req, res) {
  
  var result = await sendEventController.getTime();
  console.log(result.time);
  res.send("Servicios Exponea!:");

});






module.exports = router;