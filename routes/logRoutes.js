// routes/logRoutes.js
const express = require('express');
const router = express.Router();
const { logEvent } = require('../logController');

router.post('/log', logEvent);

module.exports = router;
