function renderCards(){
    let apiUrl = 'https://rickandmortyapi.com/api/character';

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
    <span class="card__origin">Origin location: ${character.origin.name}</span>
    `;

    fetch(character.episode[0])
      .then(response => response.json())
      .then(data => firstEpisode(data));

    function firstEpisode(episode) {
      const spanEpisode = document.createElement('span');
      spanEpisode.className = 'card__firstEpisode';
      spanEpisode.textContent = `First appearence: "${episode.name}"`;
      card.appendChild(spanEpisode);
    }

    const tagList = document.createElement('ul');
    tagList.className = 'card__tag-list';
    tagList.innerHTML = `<li>#${character.species}</li><li>#${character.status}</li><li>#${character.gender}</li>`;

    listElement.append(card);
    card.appendChild(tagList);
  });
}
}

export default renderCards;