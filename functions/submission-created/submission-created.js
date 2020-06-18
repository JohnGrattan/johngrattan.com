const { GoogleSpreadsheet } = require('google-spreadsheet');
const {
  GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GATSBY_GOOGLE_PRIVATE_KEY,
  GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL,
} = process.env;

exports.handler = async (event, context, callback) => {
  const doc = new GoogleSpreadsheet({
    GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL,
  });
  await doc.useServiceAccountAuth({
    client_email: { GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL },
    private_key: { GATSBY_GOOGLE_PRIVATE_KEY },
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  try {
    const data = JSON.parse(event.body).payload;
    const firstName = JSON.parse(event.body).payload.data.firstName;
    console.log(`Received a submission: ${firstName}`);
    const addedRow = await sheet.addRow(firstName);
    console.log(`Added Row: ${addedRow}`);

    // const { formData } = JSON.parse(event.data);
    // const {
    //   firstName = '',
    //   lastName = '',
    //   phoneNumber = '',
    //   email = '',
    //   company = '',
    //   jobTitle = '',
    //   service = '',
    //   budget = '',
    // } = formData;

    // const submission = `
    // \nFirst Name: ${firstName}
    // \nLast Name: ${lastName}
    // \nPhone Number: ${phoneNumber}
    // \nEmail: ${email}
    // \nCompany: ${company}
    // \nJob Title: ${jobTitle}
    // \nService: ${service}
    // \nBudget: ${budget}
    // `;

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
