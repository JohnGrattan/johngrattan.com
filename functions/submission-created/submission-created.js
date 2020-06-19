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
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      company,
      jobTitle,
      service,
      budget,
    } = JSON.parse(event.body).payload.data;

    console.log(`Received a submission:
    \n${firstName}
    \n${lastName}
    \n${phoneNumber}
    \n${email}
    \n${company}
    \n${jobTitle}
    \n${service}
    \n${budget}
    `);

    const addedRow = await sheet.addRow({
      firstName: { firstName },
      lastName: { lastName },
      phoneNumber: { phoneNumber },
      email: { email },
      company: { company },
      jobTitle: { jobTitle },
      service: { service },
      budget: { budget },
    });
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
