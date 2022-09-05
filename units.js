const { readFile } = require('fs/promises');

return async function getNames() {
  return readFile("./package.json", "utf8", (_ , jsonString) => {
//    if (err) {
//      console.log("File read failed:", err);
//      return err;
//    }
    console.log("File data:", jsonString.toString());
    return jsonString.toString();
  });
}
