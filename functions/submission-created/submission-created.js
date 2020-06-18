/* eslint-disable */

// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const fetch = require('node-fetch');
const { EMAIL_TOKEN } = process.env;
exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email;
  console.log(`Recieved a submission: ${email}`);
  return fetch(
    'https://script.google.com/macros/s/AKfycbzoXD8zaE7kbfrVTWT-_yXjwz5S44e6MQLuEzgPNLgbcvfsDf0/exec',
    {
      method: 'POST',
      headers: {
        Authorization: `Token ${EMAIL_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  )
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Google Sheets:\n ${data}`);
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
