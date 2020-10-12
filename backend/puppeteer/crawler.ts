const { generateImages } = require("./utils");
const puppeteer = require("puppeteer");

async function crawler(url: string) {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1024,
      height: 800,
    },
  });
  const page = await browser.newPage();
  await page.goto(url);

  //lang to Eng
  await page.click(".region");
  await page.click(".available-langs li:nth-child(2) > a");
  await page.goto(url);

  const results = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLElement>(".fl-shelf-item")).map(
      (item) => {
        const texts = Array.from(item.querySelectorAll(".text.under > span"));
        const imageId = (item.firstElementChild as HTMLAnchorElement).dataset?.backgroundImage?.split(
          "/"
        )[4];

        return {
          external_id: item.dataset.externalId,
          title: item.dataset.engTitle,
          year: texts[1]?.textContent,
          generes: texts[4]?.textContent,
          type: item.dataset.type,
          availableDate: item.dataset.availableDate + "000",
          engTitle: item.dataset.engTitle,
          url: (item.firstElementChild as HTMLAnchorElement).href,
          imageId,
        };
      }
    )
  );

  for (let i = 0; i < results.length - 1; i++) {
    const curr = results[i];
    const newPage = await browser.newPage();
    await newPage.goto(curr.url);
    console.log(`scraping modal[${i}]: `, curr.url);
    const notFound =
      (await newPage.evaluate(
        () => document.querySelector("main").textContent
      )) === "No content found on this URL.";
    // skip error page
    if (notFound) {
      continue;
    }

    const modalData = await newPage.$eval(".modal", (modal) => {
      return {
        original_title: modal?.querySelector(".original-title")?.textContent,
        imdb_rate: modal?.querySelector(".rate-val")?.textContent,
        generes: modal
          ?.querySelector(".meta")
          ?.textContent?.split("|")[1]
          ?.split(","),
        title_image: modal?.querySelector(".title-image")?.src || "",
        age_rate: modal?.querySelector(".age-rate")?.textContent || "",
        synopsis: modal?.querySelector(".synopsis")?.textContent || "",
      };
    });

    results[i] = {
      ...curr,
      ...modalData,
      images: {
        ...generateImages(curr.imageId),
        title_image: modalData.title_image,
      },
    };
    await newPage.close();
  }
  await browser.close();

  return results;
}

export { crawler };
