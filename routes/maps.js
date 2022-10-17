const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/middleware-async');
const getLayersListController = require('../controllers/get-layers-list-controller');
const getGeojsonController = require('../controllers/get-geojson-controllers');

router.post(
  '/',
  wrapAsync(async (req, res, next) => {
    const response = await getGeojsonController.get(req, res);
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
