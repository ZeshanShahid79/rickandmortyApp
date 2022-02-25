const apiUrl = 'https://rickandmortyapi.com/api/character';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => createCharacterList(data.results));

function createCharacterList(characters) {
  const listElement = document.createElement('ul');
  listElement.className = 'card-list';
  document.body.append(listElement);

  characters.forEach(character => {
    const card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
    <h2 class="card__name">${character.name}</h2>
    <img class="card__image" src=${character.image} alt="Picture of ${character.name}">
    <span class="card__statspec">${character.species} - ${character.status}</span> 
    <span class="card__origin"
    `;

    listElement.append(card);
  });
}
