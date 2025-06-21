# 📊 Analytics & Logging Service

This is a Node.js-based microservice used in a Point of Sale (POS) system to capture logs and performance metrics. It stores structured logs in **Azure Cosmos DB** and sends event tracking data to **Azure Application Insights**. This helps monitor activities like receipt generation, scan events, and performance audits across other microservices.


## 🚀 Tech Stack

- **Backend**: Node.js + Express.js
- **Logging**: Azure Application Insights
- **Database**: Azure Cosmos DB
- **Environment Config**: dotenv for environment variables
- **Dev Tools**: nodemon for development reload



## 📁 Project Structure

analytics-service/
│
├── routes/
│ └── logRoutes.js # API route for logging events
│
├── logController.js # Controller to process and store logs
├── cosmosClient.js # Cosmos DB client config
├── insights.js # Application Insights setup
│
├── .env # Environment variables (App Insights & Cosmos)
├── app.js # Entry point of the application
├── package.json # Project metadata and dependencies
└── README.md # Project documentation (this file)

## 🔐 Environment Variables (.env)

```env
INSTRUMENTATION_KEY=your_app_insights_key
COSMOS_ENDPOINT=your_cosmos_db_endpoint
COSMOS_KEY=your_cosmos_db_key
COSMOS_DATABASE=analyticsdb
COSMOS_CONTAINER=logs
PORT=3000

Installation & Setup
Clone the repo:

git clone https://github.com/your-org/analytics-service.git
cd analytics-service

Install dependencies:
npm install

Configure environment variables:
Create a .env file using the variables above with values from your Azure Portal.

Ensure your Cosmos DB and App Insights are already set up in Azure:

Go to Azure → Create Cosmos DB & Application Insights → Copy keys to .env

Run the app:

npm run dev     # for development (with nodemon)
npm start       # for production

API Endpoints
Event Logging

Method	Route	Description
POST	/api/log	Store event log and send to App Insights

Example Request
{
  "event": "receipt_generated",
  "timestamp": "2025-06-21T10:30:00Z",
  "receiptId": "abc123",
  "clientId": "client789"
}

Testing with Postman
Endpoint: http://localhost:3000/api/log

Method: POST

Body: JSON (raw)

Headers: Content-Type: application/json

Features
Centralized logging endpoint for all POS microservices

Custom event tracking and exception logging with App Insights

JSON document storage in Azure Cosmos DB

Easily extensible to include more event types and metrics

Future Enhancements (Suggestions)
Add log filters by date/client/event type

Create log retrieval endpoints (GET)

Add email alerts for critical exceptions

Connect to Power BI dashboards for real-time insights

Store logs in cold/archival tier after 30 days

Author
Made by Komal
Intern @ TGT by TerraGrid Tech

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more info.
