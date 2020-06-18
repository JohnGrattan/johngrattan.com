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

    console.log(`Submission Info: ${data}`);

    const data = JSON.parse(event.body);
    const addedRow = await sheet.addRow(data);

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
