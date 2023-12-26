const fs = require("fs");
const path = require("path");

const createDirectory = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

const saveJson = async (dataSource,  filename = "report", dir) => {
    try {
        const filePath = path.join(dir, `${filename}.json`);
        await fs.promises.writeFile(filePath, JSON.stringify(dataSource), "utf8");
    } catch (error) {
        console.error("Erro ao salvar os dados no arquivo JSON:", error);
        throw error;
    }
};

const jsonSave = async (dataSource, filename, dir = './output') => {
    createDirectory(dir);
    await saveJson(dataSource, filename, dir);
};

module.exports = jsonSave;
