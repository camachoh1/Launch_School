function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({error: 'User not found'}), 500);
  });
}

let promise = fetchUserData();

promise
  .catch(error => console.error('compae eche la cagaste:', error.error))
  .finally(() => console.log("fetching complete"));