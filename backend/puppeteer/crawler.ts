const { v4: uuidv4 } = require("uuid");
const { generateImages } = require("./utils");
const puppeteer = require("puppeteer");

interface Video {
  id?: string;
  external_id?: string;
  imageId?: string;
  title?: string;
  genres?: string[];
  year?: string;
  type?: string;
  availableDate?: string;
  engTitle?: string;
  url?: string;
  original_title?: string;
  imdb_rate?: string;
  age_rate?: string;
  synopsis?: string;
}

interface Images {
  id: string;
  img_190: string;
  img_262: string;
  img_561: string;
  img_800: string;
  img_1080: string;
  img_1280: string;
  title_image: string;
  Item: string;
}

async function crawler(url: string) {
  const images: Images[] = [];
  const genres: string[] = [];
  const movieGenres: object[] = [];
  const browser = await puppeteer.launch({
    // headless: false,
    // defaultViewport: {
    //   width: 1024,
    //   height: 800,
    // },
  });
  const page = await browser.newPage();
  await page.goto(url);

  //lang to Eng
  await page.click(".region");
  await page.click(".available-langs li:nth-child(2) > a");
  await page.goto(url);

  const videos: Video[] = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLDivElement>(".fl-shelf-item")).map(
      (item: HTMLDivElement) => {
        const texts = Array.from(item.querySelectorAll(".text.under > span"));
        const imageId =
          (item.firstElementChild as HTMLAnchorElement).dataset?.backgroundImage?.split(
            "/"
          )[4] || "";

        return {
          id: item.dataset.modalOpenId || "",
          external_id: item.dataset.externalId || "",
          imageId,
          title: item.dataset.engTitle || "",
          year: texts[1]?.textContent?.trim() || "",
          // genres: texts[4]?.textContent,
          type: item.dataset.type || "",
          availableDate: item.dataset.availableDate + "000",
          engTitle: item.dataset.engTitle || "",
          url: (item.firstElementChild as HTMLAnchorElement).href || "",
        };
      }
    )
  );

  for (let i = 0; i < videos.length - 1; i++) {
    const curr = videos[i];
    const newPage = await browser.newPage();
    await newPage.goto(curr.url);
    console.log(`scraping modal[${i}]: `, curr.url);
    const notFound =
      (await newPage.evaluate(
        () => document.querySelector<HTMLDivElement>("main")?.textContent
      )) === "No content found on this URL.";
    // skip error page
    if (notFound) {
      continue;
    }

    const { title_image, ...modalData } = await newPage.$eval(
      ".modal",
      (modal) => {
        return {
          original_title: modal?.querySelector(".original-title")?.textContent,
          imdb_rate: modal?.querySelector(".rate-val")?.textContent,
          genres: modal
            ?.querySelector(".meta")
            ?.textContent?.split("|")[1]
            ?.split(",")
            .map((g) => g.trim()),
          title_image: modal?.querySelector(".title-image")?.src || "",
          age_rate:
            modal?.querySelector(".age-rate")?.textContent?.replace(/\+/, "") ||
            "",
          synopsis: modal?.querySelector(".synopsis")?.textContent || "",
        };
      }
    );

    genres.push(...modalData.genres);

    videos[i] = {
      ...curr,
      ...modalData,
    };
    images.push({
      id: curr.imageId,
      ...generateImages(curr.imageId),
      ...(title_image ? { title_image } : []),
    });

    await newPage.close();
  }
  await browser.close();

  const uniqueGenres = [...new Set(genres)].map((genre) => ({
    id: uuidv4(),
    name: genre,
  }));

  for (let i = 0; i < videos.length - 1; i++) {
    const video = videos[i];
    const videoGenres = video.genres || [];
    if (videoGenres.length > 0) {
      for (let j = 0; j < videoGenres.length - 1; j++) {
        movieGenres.push({
          id: uuidv4(),
          movieId: video.id,
          genreId: uniqueGenres.find((u) => u.name === videoGenres[j])?.id,
        });
      }
      delete video.genres;
    }
  }

  return {
    videos: videos.map(({ url, ...video }) => video),
    images,
    genres: uniqueGenres,
    movieGenres,
  };
}

export { crawler };
