const images_res = [
  "190_271",
  "262_374",
  "561_316",
  "800_800",
  "1080_463",
  "1280_720",
];

export const generateImages = (id: string): {} => {
  const obj = {};
  images_res.forEach((res) => {
    obj[`img_${res.split("_")[0]}`] = `//cdn.hbogo.eu/images/${id}/${res}.jpg`;
  });
  return obj;
};

exports = { generateImages };
