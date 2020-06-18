const { GoogleSpreadsheet } = require('google-spreadsheet');
const {
  GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GATSBY_GOOGLE_PRIVATE_KEY,
  GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL,
} = process.env;

exports.handler = async (event, context, callback) => {
  try {
    console.log(`Received a submission: ${data}`);

    const doc = new GoogleSpreadsheet({
      GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL,
    });
    await doc.useServiceAccountAuth({
      client_email: { GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL },
      private_key: { GATSBY_GOOGLE_PRIVATE_KEY },
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    console.log(`Submission Info: ${submission}`);

    const { formData } = JSON.parse(event.data);
    const {
      firstName = '',
      lastName = '',
      phoneNumber = '',
      email = '',
      company = '',
      jobTitle = '',
      service = '',
      budget = '',
    } = formData;

    const submission = `
    \nFirst Name: ${firstName}
    \nLast Name: ${lastName}
    \nPhone Number: ${phoneNumber}
    \nEmail: ${email}
    \nCompany: ${company}
    \nJob Title: ${jobTitle}
    \nService: ${service}
    \nBudget: ${budget}
    `;

    const addedRow = await sheet.addRow(formData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
