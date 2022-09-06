const {database} = require("./database.js")

const getUnits = async () => {
  let res = database.select().from("units")
  return res ;
}

module.exports = { getUnits }