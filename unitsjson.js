const { readFile } = require('fs/promises');

getNames = async () => {
  return readFile("./package.json", "utf8", (_ , jsonString) => {
//    if (err) {
//      console.log("File read failed:", err);
//      return err;
//    }
    console.log("File data:", jsonString.toString());
    return jsonString.toString();
  });
}

module.exports = { getNames }
//exports.getNames = getNames
