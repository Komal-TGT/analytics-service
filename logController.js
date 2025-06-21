// logController.js
const container = require('./cosmosClient');
const client = require('./insights');

exports.logEvent = async (req, res) => {
  const event = req.body;

  try {
    // Store in Cosmos DB
    const { resource } = await container.items.create(event);

    // Log to App Insights
    client.trackEvent({ name: "CustomLogEvent", properties: event });

    res.status(201).json({ message: 'Log stored successfully', id: resource.id });
  } catch (error) {
    client.trackException({ exception: error });
    res.status(500).json({ error: 'Failed to log event' });
  }
};
