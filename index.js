const apiUrl = 'https://rickandmortyapi.com/api/character';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => createCharacterList(data.results));

function createCharacterList(characters) {
  const listElement = document.createElement('ul');
  listElement.className = 'tag-list';
  document.body.append(listElement);

  characters.forEach(character => {
    const card = document.createElement('li');
    card.className = 'tag';
    card.textContent = character.name;
    listElement.append(card);
  });
}
