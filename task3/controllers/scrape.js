import fetch from "node-fetch";
import { parseTitle } from "../utils/helper.js";

const getTitle = (urls) => {
  return new Promise(async (resolve, reject) => {
    const titles = [];
    for (var i in urls) {
      let url = urls[i];

      // check and fix urls
      if (url.includes("https://www."));
      else if (url.includes("www.")) url = "https://".concat(url);
      else url = "https://www.".concat(url);

      try {
        let fetchRes = await fetch(url);
        let body = await fetchRes.text();
        const title = parseTitle(body);
        titles.push(title);
      } catch (err) {
        titles.push("NO RESPONSE");
      }
    }

    const error = false;
    if (!error) resolve(titles);
    else reject("Error: something went wrong");
  });
};

export { getTitle };
