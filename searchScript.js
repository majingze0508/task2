function craigslistSearch(searchQuery){
  const keyValuePairs = [];
  Object.keys(searchQuery).map((key) => {
    return keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(searchQuery[key]))
  });
  const queryStr = keyValuePairs.join('&');
  const url = `https://toronto.craigslist.org/search/ggg?${queryStr}`;
  fetch(url)
  .then((response) => {
    return response.json();
  });
}