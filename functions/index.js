const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IbWPXHExom4fEyWYumGfwT65ouwlmZ7uoqdwmD4ySRRCc6FTtRyIEKMaH2kXVn3zKMcjzF3K5RvK31Ty2YLxSx600xkUoOm1Z"
);

// - API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved for this amount!!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/fir-clone-f64a5/us-central1/api
