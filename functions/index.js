

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const express = require('express')
// const cors = require('cors')
// const stripe = require('stripe')
// ('sk_test_51PTLgO05oAhMKKUfJVdOKOQul4cMarcoxeq3PKrQZ7CnpVZ7GQhDbJd20uZqZbH7TdrJm8We451fVfjBrbTRLPGp00JUBEhiIL')
// //API

// //App config
// const app = express()

// //  Middlewares
// app.use(cors({ origin: true}))
// app.use(express.json())

// // API routes
// app.get('/', (request, response) => response.status(200).send('hello world'))

// // Listen command
// exports.api = functions.https.onRequest(app);

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your_secret_key');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
  const total = req.body.total;
  console.log('Payment Request Received for this amount >>> ', total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send('Internal Server Error');
  }
});

exports.api = functions.https.onRequest(app);

