const fs = require("fs");
const path = require("path");
let { buildDate } = require("../src/static/buildDate.json");
const buildJSONPath = path.resolve("./src/static/buildDate.json")

buildDate = new Date().getTime();

fs.writeFileSync(path.resolve(buildJSONPath), JSON.stringify({ buildDate }, null, 2));

const jsonContent = JSON.stringify({ buildDate });

fs.writeFile("./public/meta.json", jsonContent, "utf8", function (error) {
    if (error) {
        console.log("Update error occurred meta.json");
        return console.log(error);
    }
    console.log("Updated metaData meta.json file");
});