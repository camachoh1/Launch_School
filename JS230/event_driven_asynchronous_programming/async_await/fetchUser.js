async function fetchUserPofile(userId) {
  try {
    const userProfile = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json())
    console.log("User Profile", userProfile);
  } catch(error) {
    console.error('error fetching profile:', error);
  }

  try {
    const userPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`).then((res) => res.json());
    console.log("User Posts", userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const userComments = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/comments`);
    console.log("User Comments", userComments);
  } catch (error) {
    console.error("Error fetching comments", error);
  }
}

fetchUserPofile(1);