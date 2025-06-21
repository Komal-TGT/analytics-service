// insights.js
const appInsights = require("applicationinsights");
require('dotenv').config();

appInsights.setup(process.env.INSTRUMENTATION_KEY)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .start();

module.exports = appInsights.defaultClient;
