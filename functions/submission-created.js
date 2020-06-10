const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(
      '10o2IdQb0kwQ3JCeU7PnVdokEj_1D8j9pcuvMCmqwfek'
    );
    await doc.useServiceAccountAuth(
      require('../lambda/jg-contact-form-sheets-ff518dde83ce.json')
    );
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const data = JSON.parse(event.body);
    const addedRow = await sheet.addRow(data);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`,
      }),
    });
  } catch (error) {
    return callback(null, {
      statusCode: 500,
      body: error.toString(),
    });
  }
};
