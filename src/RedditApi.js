

export default async function fetchAnimal(animal) {
    let response = await fetch(`https://www.reddit.com/r/${animal}.json`);
    return response.json();
  }

// export async function fetchUser(user) {
//     let response = await fetch(`https://www.reddit.com/r/${user}.json`);
//     return response.json();
//   }
