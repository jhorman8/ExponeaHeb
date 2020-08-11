var express = require('express');
var router = express.Router();
var sendEventController = require ('../controlers/sendEvent');
var viewItemMapper = require('../Mappers/view_item_mapper');
var cartUpdateMapper = require('../Mappers/cart_update_mapper');
var pruchaseMapper = require('../Mappers/purchase_mapper');


router.get('/', function (req, res) {
  res.send("Servicios Exponea!:");
});


router.post('/api/viewItem', async function (req, res) {
  
  var result = await viewItemMapper.mapperViewItem(req.body,'view_item');
  console.log(result);
  res.send(result);

});



router.post('/api/purchase', async function (req, res) {
  
  var result = await pruchaseMapper.mapperPurchase(req.body,'purchase');
  console.log(result);
  res.send(result);

});



router.post('/api/cartUpdate', async function (req, res) {
  
  var result = await cartUpdateMapper.mapperCartUpdate(req.body,'cart_update');
  console.log(result);
  res.send(result);

});


module.exports = router;