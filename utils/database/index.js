const sqlite3 = require("sqlite3");
const fs = require("fs");
const { verbose, Database, OPEN_READWRITE, OPEN_CREATE } = sqlite3;
const db = new Database(":memory:", OPEN_READWRITE | OPEN_CREATE);

const updateDatabase = async ({jsonFilePath, sqliteFilePath, tableName}) => {
    try {

        const json_data = await fs.promises.readFile(jsonFilePath, "utf8");
        const data = JSON.parse(json_data);

        const fields = Object.keys(data[0]);

        const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${getFieldsDefinition(fields)})`;
        await db.run(createTableQuery);

        const insertQuery = `INSERT INTO ${tableName} VALUES (${getInsertPlaceholders(fields)})`;
        const stmt = await db.prepare(insertQuery);
        for (const user of data) {
            const fieldValues = Object.values(user);
            await stmt.run(...fieldValues);
        }
        await stmt.finalize();

        const rows = await db.all(`SELECT * FROM ${tableName}`);

        await db.close();
    } catch (error) {
        console.error("Ocorreu um erro ao atualizar o banco de dados:", error);
        throw error;
    }
};

const getFieldsDefinition = (fields) => {
    return fields.map((field) => `${field} TEXT`).join(", ");
};

const getInsertPlaceholders = (fields) => {
    return fields.map(() => "?").join(", ");
};

module.exports = updateDatabase;
