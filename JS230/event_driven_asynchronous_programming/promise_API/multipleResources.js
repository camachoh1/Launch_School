function loadMultipleResources(urls) {
  const fetchPromises = urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch(() => "Failed to fetch")
  );
  return Promise.allSettled(fetchPromises);
}

loadMultipleResources([
  "https://jsonplaceholder.typicode.com/todos/1",
  "invalidUrl",
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fetched data:", result.value);
    } else {
      console.error(result.reason);
    }
  });
});
