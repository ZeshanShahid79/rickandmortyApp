console.clear()
const apiUrl = 'https://rickandmortyapi.com/api/character';

fetch(apiUrl)
.then(response => response.json())
.then(data => createCharacterList(data.results));

function createCharacterList(characters) {
  const listElement = document.createElement('ul');
  listElement.className = 'card-list';
  document.body.append(listElement);
  
/*
function createEpisodeList (episodes) {
  episodes.forEach((episode) => {
    const episodeUrl = episode.episode[0];
    console.log(episodeUrl)
    fetch(episodeUrl)
    .then((response) => response.json())
    .then((pokeData) => createCharacterList(pokeData));
  });
}
*/

  characters.forEach(character => {
    const card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
    <h2 class="card__name">${character.name}</h2>
    <img class="card__image" src=${character.image} alt="Picture of ${character.name}">
    <span class="card__statspec">${character.species} - ${character.status}</span> 
    <span class="card__origin">${character.origin.name}</span>
    `;

fetch(character.episode[0])
  .then(response => response.json())
  .then(data => console.log(data))

    listElement.append(card);
  });
}
