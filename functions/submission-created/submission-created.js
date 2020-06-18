// if (!process.env.NETLIFY) {
//   // get local env vars if not in CI
//   // if in CI i expect its already set via the Netlify UI
//   require('dotenv').config();
// }
// required env vars
// if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
//   throw new Error('no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set');
// if (!process.env.GOOGLE_PRIVATE_KEY)
//   throw new Error('no GOOGLE_PRIVATE_KEY env var set');
// if (!process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)
//   // spreadsheet key is the long id in the sheets URL
//   throw new Error('no GOOGLE_SPREADSHEET_ID_FROM_URL env var set');

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
// const fetch = require('node-fetch');
// const { EMAIL_TOKEN } = process.env;
// exports.handler = async event => {
//   // const firstName = JSON.parse(event.body).payload.firstName;
//   // const lastName = JSON.parse(event.body).payload.lastName;
//   // const phoneNumber = JSON.parse(event.body).payload.phoneNumber;
//   const email = JSON.parse(event.body).payload.email;
//   // const company = JSON.parse(event.body).payload.company;
//   // const jobTitle = JSON.parse(event.body).payload.jobTitle;
//   // const service = JSON.parse(event.body).payload.service;
//   // const budget = JSON.parse(event.body).payload.budget;

//   // const data = {
//   //   firstName,
//   //   lastName,
//   //   phoneNumber,
//   //   email,
//   //   company,
//   //   jobTitle,
//   //   service,
//   //   budget,
//   // };

//   console.log(`Recieved a submission: ${email}`);
//   return fetch(
//     'https://script.google.com/macros/s/AKfycbzoXD8zaE7kbfrVTWT-_yXjwz5S44e6MQLuEzgPNLgbcvfsDf0/exec',
//     {
//       method: 'POST',
//       headers: {
//         // Authorization: `Token ${EMAIL_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ data }),
//     }
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(`Submitted to Google Sheets:\n ${email}`);
//     })
//     .catch(error => ({ statusCode: 422, body: String(error) }));
// };

const { GoogleSpreadsheet } = require('google-spreadsheet');
const {
  GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GATSBY_GOOGLE_PRIVATE_KEY,
  GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL,
} = process.env;

exports.handler = async (event, context, callback) => {
  try {
    const firstName = JSON.parse(event.body).payload.firstName;
    const lastName = JSON.parse(event.body).payload.lastName;
    const phoneNumber = JSON.parse(event.body).payload.phoneNumber;
    const email = JSON.parse(event.body).payload.email;
    const company = JSON.parse(event.body).payload.company;
    const jobTitle = JSON.parse(event.body).payload.jobTitle;
    const service = JSON.parse(event.body).payload.service;
    const budget = JSON.parse(event.body).payload.budget;
    console.log(
      `Received a submission: ${firstName}, ${lastName}, ${phoneNumber}, ${email}, ${company}, ${jobTitle}, ${service}, ${budget}`
    );

    const doc = new GoogleSpreadsheet({
      GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL,
    });
    await doc.useServiceAccountAuth({
      client_email: { GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL },
      private_key: { GATSBY_GOOGLE_PRIVATE_KEY },
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // const data = JSON.parse(event.body).payload.email;
    console.log(
      `Submission Info:\n ${firstName}, ${lastName}, ${phoneNumber}, ${email}, ${company}, ${jobTitle}, ${service}, ${budget}`
    );

    const addedRow = await sheet.addRow([
      { firstName: { firstName } },
      { lastName: { lastName } },
      { phoneNumber: { phoneNumber } },
      { email: { email } },
      { company: { company } },
      { jobTitle: { jobTitle } },
      { service: { service } },
      { budget: { budget } },
    ]);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(firstName),
    });
  } catch (error) {
    console.log(error);
    return callback(null, {
      statusCode: 500,
      body: error.toString(),
    });
  }
};
