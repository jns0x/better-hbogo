const puppeteer = require("puppeteer");

const url = "https://hbogo.pl/";

// interface Movie {
//   title: string;
//   year: string;
//   external_id: string;
//   pathname: string;
//   type: string;
//   availableDate: string;
//   engTitle: string;
//   hint: string;
//   images: Images;
// }

// interface Images {
//   img_190: string;
//   img_262: string;
//   img_561: string;
//   img_576: string;
//   img_800: string;
//   img_1080: string;
//   img_1280: string;
// }

const images_res = [
  "190_271",
  "262_374",
  "561_316",
  "800_800",
  "1080_463",
  "1280_720",
];

const generateImages = (id: string): {} => {
  const obj = {};
  images_res.forEach((res) => {
    obj[`img_${res.split("_")[0]}`] = `//cdn.hbogo.eu/images/${id}/${res}.jpg`;
  });
  return obj;
};

const crawler = async () => {
  try {
    const browser = await puppeteer.launch({
      // headless: false,
      // defaultViewport: {
      //   width: 1280,
      //   height: 800,
      // },
    });
    const page = await browser.newPage();
    await page.goto(url);

    const results = await page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLElement>(".shelf-item")).map(
        (item) => {
          const texts = Array.from(item.querySelectorAll(".text.under > span"));

          const imageId = (item.firstElementChild as HTMLAnchorElement).dataset.backgroundImage.split(
            "/"
          )[4];

          return {
            external_id: item.dataset.externalId,
            title: item.dataset.engTitle,
            year: texts[1]?.textContent,
            generes: texts[4]?.textContent,
            type: item.dataset.type,
            availableDate: item.dataset.availableDate,
            engTitle: item.dataset.engTitle,
            url: (item.firstElementChild as HTMLAnchorElement).href,
            image: (item.firstElementChild as HTMLAnchorElement).dataset
              .backgroundImage,
            imageId,
            hint: "", //TODO..
          };
        }
      )
    );

    for (let i = 0; i < 5; i++) {
      const curr = results[i];
      const newPage = await browser.newPage();
      await newPage.goto(curr.url);
      const synopsis = await newPage.evaluate(
        () => document.querySelector(".synopsis").textContent
      );
      const title_image = await newPage.evaluate(
        () =>
          document.querySelector<HTMLImageElement>(
            ".modal > .modal-header > .text > .title-image"
          )?.src || ""
      );
      results[i] = {
        ...curr,
        synopsis,
        images: { ...generateImages(curr.imageId), title_image },
      };
      await newPage.close();
    }
    console.log(results.slice(0, 5));
    await browser.close();
  } catch (err) {
    console.error(err);
  }
};

crawler();
