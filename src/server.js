const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const unirest = require('unirest'); // Import unirest for making HTTP requests

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle M-Pesa payment
app.post('/mpesa/payment', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  try {
    const response = await unirest
      .post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
      .headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer UjcwVqGEnA2Ll2Fvv9duAnZnvFfU', // Replace with your actual access token
      })
      .send({
        "BusinessShortCode": 174379,
        "Password": await generatePassword(),
        "Timestamp": await generateTimestamp(),
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phoneNumber,
        "PartyB": 174379,
        "PhoneNumber": phoneNumber,
        "CallBackURL": "https://mydomain.com/path", // Replace with your actual callback URL
        "AccountReference": "CompanyXLTD", // Replace with your unique transaction reference
        "TransactionDesc": "Payment of X" // Replace with your transaction description
      })
      .end((response) => {
        console.log(response.body);
        res.status(200).json(response.body); // Respond to client with M-Pesa API response
      });

  } catch (error) {
    console.error('Payment Error:', error);
    res.status(500).json({ error: 'Payment failed. Please try again.' });
  }
});

// Function to generate M-Pesa password
const generatePassword = async () => {
  const timestamp = await generateTimestamp();
  const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'; // Replace with your actual passkey
  const shortcode = '174379'; // Replace with your actual business shortcode

  return Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
};

// Function to generate M-Pesa timestamp
const generateTimestamp = async () => {
  return new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
