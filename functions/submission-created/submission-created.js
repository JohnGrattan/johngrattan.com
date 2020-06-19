const credential = require('../../lambda/jg-form-to-sheets-ffecb776b819.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL } = process.env;

exports.handler = async (event, context, callback) => {
  const doc = new GoogleSpreadsheet(
    '10o2IdQb0kwQ3JCeU7PnVdokEj_1D8j9pcuvMCmqwfek'
  );

  await doc.useServiceAccountAuth(require(credential));

  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  try {
    const created_at = JSON.parse(event.body).created_at;
    const firstName = JSON.parse(event.body).data.firstName;
    const lastName = JSON.parse(event.body).data.lastName;
    const phoneNumber = JSON.parse(event.body).data.phoneNumber;
    const email = JSON.parse(event.body).data.email;
    const company = JSON.parse(event.body).data.company;
    const jobTitle = JSON.parse(event.body).data.jobTitle;
    const service = JSON.parse(event.body).data.service;
    const budget = JSON.parse(event.body).data.budget;

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
