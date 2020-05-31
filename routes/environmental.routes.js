const express = require('express');
const router = express.Router();

const environmentalData = require ('../controllers/environmentalDataController');

router.get('/', environmentalData.getCurrentData);

module.exports = router;