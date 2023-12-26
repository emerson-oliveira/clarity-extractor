const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

const openSheet = async (SPREADSHEET_ID, EMAILSERVICE, PASSSERVICE, sheetIndex = 0) => {
    try {
        const serviceAccountAuth = new JWT({
            email: EMAILSERVICE,
            key: PASSSERVICE,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });   
 
        const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[sheetIndex];
        return {
            doc,
            sheet,
        };
    } catch (error) {
        console.error(`Erro na etapa inicial: `, error);
        throw error;
    }
};

const saveDataSheet = async (dataSource, SPREADSHEET_ID, EMAILSERVICE, PASSSERVICE) => {
    try {
        const { doc, sheet } = await openSheet(SPREADSHEET_ID, EMAILSERVICE, PASSSERVICE);
        await sheet.clear();
        const rows = Object.keys(dataSource[0]);
        const values = Object.values(dataSource);
        await sheet.setHeaderRow(rows);
        await sheet.addRows(values);
    } catch (error) {
        console.error("Erro ao salvar dados na planilha:", error);
        throw error;
    }
};

module.exports = saveDataSheet;
