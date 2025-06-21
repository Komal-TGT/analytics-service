// app.js
const express = require('express');
require('dotenv').config();
require('./insights'); // Start App Insights
const logRoutes = require('./routes/logRoutes');

const app = express();
app.use(express.json());

app.use('/api', logRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Analytics service running on port ${PORT}`);
});
