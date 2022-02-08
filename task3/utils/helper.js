//helper function
const parseTitle = (body) => {
  let match = body.match(/<title.*>([^<]*)<\/title>/);
  if (!match || typeof match[1] !== "string")
    throw new Error("Unable to parse the title tag");
  return match[1];
};

const makeHtml = (titles) => {
  const titleListHtml = titles
    .map((title) => "<li>" + title + "</li>")
    .join("");
  return (
    "<html><head><title>Careaxiom test</title></head><body><h1> Following are the titles of given websites: </h1><ul>" +
    titleListHtml +
    "</ul></body></html>"
  );
};

export { makeHtml, parseTitle };
