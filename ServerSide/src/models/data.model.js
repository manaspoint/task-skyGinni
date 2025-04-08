const fs = require("fs");
const path = require("path");

exports.readJSON = (filename) => {
  try {
    const filePath = path.join(__dirname, "..", "data", filename);
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (err) {
    throw new Error(`Failed to read ${filename}: ${err.message}`);
  }
};
