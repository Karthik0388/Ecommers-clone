const functions = require("firebase-functions");
import Payment from "./../src/Pages/Payment/Payment";

//! http://localhost:5001/eshoppers-3ca3e/us-central1/api
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
let express = require("express");
let cors = require("cors");

let stripe = require("stripe")(
  "sk_test_51KDjnPSG2qOC9zItur1YgIaJpJgRnBJavEhG4xRWNPmSOAwdGeigTPDNj03KglNSKoE0s7WWoJe7be2ggmeDCisB007onwiFs5"
);

let app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.get("/", (Request, response) =>
  response.status(200).send("Hello From Cloud")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "rupee",
  });
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
