async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error("Failed to load resource");
  } finally {
    console.log("resource fetch attempt made");
  }


}

fetchResource("https://jsonplaceholder.typicode.com/todos/1");