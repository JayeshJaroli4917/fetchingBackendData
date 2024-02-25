document.addEventListener('DOMContentLoaded', () => {
    const planetsList = document.getElementById('planetsList');
  
    fetch('https://swapi.dev/api/planets/?format=json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.results.forEach(planet => {
          const planetElement = document.createElement('div');
          planetElement.classList.add('planet');
          planetElement.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Climate: ${planet.climate}</p>
            <p>Population: ${planet.population}</p>
            <p>Terrain: ${planet.terrain}</p>
          `;
          planetsList.appendChild(planetElement);
        });
      })
      .catch(error => {
        console.error('Error fetching planets:', error);
      });
  });
  