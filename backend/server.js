import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';



//Initialize express app
const app = express();


//CONNECT TO DATABASE

await connectDB();


//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.get('/',(req,res)=>{
  res.send('API is running...');
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebhooks);


//Port
const PORT=process.env.PORT || 3000;

Sentry.setupExpressErrorHandler(app);


app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})




// mongodb+srv://kundankumarsingh2005_db_user:cvMEAg6K2dM3ypTo@jobportal.nt2zruo.mongodb.net/?retryWrites=true&w=majority&appName=JobPortal
