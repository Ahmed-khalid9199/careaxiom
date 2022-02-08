import fetch from "node-fetch";
import { parseTitle } from "../utils/helper.js";

const getTitle = async (urls, callback) => {
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
  callback(titles);
};

export { getTitle };
