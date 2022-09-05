// Setting up an SQLite database: ./app/database.js
import fs from 'fs';

const getNames = () => {fs.readFile("./package.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return "Error!";
    }
    console.log("File data:", jsonString);
    return jsonString;
  });}


export default getNames