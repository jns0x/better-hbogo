const { crawler } = require("./crawler");
const fs = require("fs");

const url = "https://hbogo.pl";

(async () => {
  try {
    const data = { data: [...(await crawler(`${url}/series`))] };

    fs.writeFile(
      "./migrations/db.json",
      JSON.stringify(data),
      "utf8",
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(
          "The data has been scraped and saved successfully! View it at './data.json'"
        );
      }
    );
  } catch (err) {
    console.error(err);
  }
})();
