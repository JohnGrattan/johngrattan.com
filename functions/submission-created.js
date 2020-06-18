const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(
      '10o2IdQb0kwQ3JCeU7PnVdokEj_1D8j9pcuvMCmqwfek'
    );
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const data = JSON.parse(event.body).payload;
    console.log(data);

    const addedRow = await sheet.addRow(data);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
    return callback(null, {
      statusCode: 500,
      body: error.toString(),
    });
  }
};
