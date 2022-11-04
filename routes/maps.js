const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/middleware-async');
const getLayersListController = require('../controllers/get-layers-list-controller');
const getGeojsonController = require('../controllers/get-geojson-controllers');
const getAttributeController = require('../controllers/get-attribute-controller');
const getAttributeRangeController = require('../controllers/get-attribute-range-controller');

router.post(
  '/',
  wrapAsync(async (req, res, next) => {
    const response = await getGeojsonController.post(req, res);
    return response;
  })
);
router.post(
  '/attribute',
  wrapAsync(async (req, res, next) => {
    const response = await getAttributeController.post(req, res);
    return response;
  })
);
router.post(
  '/attribute_range',
  wrapAsync(async (req, res, next) => {
    const response = await getAttributeRangeController.post(req, res);
    return response;
  })
);
router.get(
  '/layers',
  wrapAsync(async (req, res, next) => {
    const response = await getLayersListController.get(req, res);
    return response;
  })
);

module.exports = router;
