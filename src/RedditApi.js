

export  default async function fetchAnimal(animal) {
    let response = await fetch(`https://www.reddit.com/r/${animal}.json`);
    return response.json();
  }


