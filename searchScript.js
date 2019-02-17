function craigslistSearch(searchQuery){
  const keyValuePairs = [];
  let queryStr = '';
  if (searchQuery && Object.keys(searchQuery).length > 0) {
    Object.keys(searchQuery).map((key) => {
      return keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(searchQuery[key]))
    });
    queryStr = keyValuePairs.join('&');
  }
  const url = queryStr !== '' ? `https://toronto.craigslist.org/search/ggg?${queryStr}` : 'https://toronto.craigslist.org/search/ggg';
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    console.log(err);
  });
}