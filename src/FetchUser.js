export default async function fetchUser(author) {
    let response = await fetch(`https://www.reddit.com/user/${author}.json`);
    return response.json();
  }