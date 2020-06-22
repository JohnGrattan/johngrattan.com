require('dotenv').config();

const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context, callback) => {
  const doc = new GoogleSpreadsheet(
    process.env.GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL
  );

  await doc.useServiceAccountAuth({
    client_email: JSON.parse(process.env.GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL),
    private_key: JSON.parse(process.env.GATSBY_GOOGLE_PRIVATE_KEY),
  });

  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  try {
    const created_at = JSON.parse(event.body).payload.created_at;
    const firstName = JSON.parse(event.body).payload.data.firstName;
    const lastName = JSON.parse(event.body).payload.data.lastName;
    const phoneNumber = JSON.parse(event.body).payload.data.phoneNumber;
    const email = JSON.parse(event.body).payload.data.email;
    const company = JSON.parse(event.body).payload.data.company;
    const jobTitle = JSON.parse(event.body).payload.data.jobTitle;
    const service = JSON.parse(event.body).payload.data.service;
    const budget = JSON.parse(event.body).payload.data.budget;

    const addedRow = await sheet.addRow([
      created_at,
      firstName,
      lastName,
      phoneNumber,
      email,
      company,
      jobTitle,
      service,
      budget,
    ]);

    console.log(`Added Row: ${addedRow}`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `POST Success - added row ${addedRow._rowNumber - 1}`,
        rowNumber: addedRow._rowNumber - 1, // minus the header row
      }),
    };
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};
