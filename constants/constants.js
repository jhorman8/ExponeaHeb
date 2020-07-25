const config = require("config");


const ID_CROSS = process.env.ID_CROSS
  ? process.env.ID_CROSS
  : config.get("id_exponea.cross");

const ID_FULL = process.env.ID_FULL
  ? process.env.ID_FULL
  : config.get("id_exponea.catalog_full");

const ID_RECOMMENDATION_VIEW = process.env.ID_RECOMMENDATION_VIEW
  ? process.env.ID_RECOMMENDATION_VIEW
  : config.get("id_exponea.id_recommendation_view");
  
  const ID_RECOMMENDATION_PURCHASE = process.env.ID_RECOMMENDATION_PURCHASE
  ? process.env.ID_RECOMMENDATION_PURCHASE
  : config.get("id_exponea.id_recomendation_top_purchase");
 
  

module.exports = {
  ID_CROSS,
  ID_FULL,
  ID_RECOMMENDATION_VIEW,
  ID_RECOMMENDATION_PURCHASE
};