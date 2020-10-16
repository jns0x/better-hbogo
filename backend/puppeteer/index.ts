const { crawler } = require("./crawler");
const fs = require("fs");

const url = "https://hbogo.pl";

(async () => {
  try {
    const result = await crawler(`${url}/series`);
    const date = new Date().getTime();

    Object.keys(result).forEach((key) => {
      fs.writeFile(
        `./migrations/${key}_${date}.json`,
        JSON.stringify(result[key]),
        "utf8",
        function (err) {
          if (err) {
            return console.log(err);
          }
          console.log(
            "The data has been scraped and saved successfully! View it at './migrations/'"
          );
        }
      );
    });
  } catch (err) {
    console.error(err);
  }
})();
