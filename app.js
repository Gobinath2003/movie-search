const API_KEY = '4ece73f7'; // Replace with your actual OMDb API key

const searchBtn = document.getElementById('searchBtn');
const queryInput = document.getElementById('query');
const moviesDiv = document.getElementById('movies');

searchBtn.addEventListener('click', () => {
  const query = queryInput.value.trim();
  if (query) {
    fetchMovies(query);
  }
});

/**
 * Fetch movies based on search query.
 */
async function fetchMovies(query) {
  try {
    moviesDiv.innerHTML = '<p>Loading...</p>';
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      moviesDiv.innerHTML = `<p>${data.Error}</p>`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    moviesDiv.innerHTML = `<p>Something went wrong. Try again later.</p>`;
  }
}

/**
 * Display movie cards in the DOM.
 */
function displayMovies(movies) {
  moviesDiv.innerHTML = '';
  movies.forEach(movie => {
    const poster = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image';
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img src="${poster}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    moviesDiv.appendChild(movieCard);
  });
}

function displayMovies(movies) {
  moviesDiv.innerHTML = '';
  movies.forEach(movie => {
    const poster = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image';
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img src="${poster}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    movieCard.addEventListener('click', () => {
      fetchMovieDetails(movie.imdbID);
    });

    moviesDiv.appendChild(movieCard);
  });
}

async function fetchMovieDetails(imdbID) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.Response === "True") {
      showMovieDetails(data);
    } else {
      alert('Details not found!');
    }
  } catch (err) {
    console.error('Error fetching movie details:', err);
  }
}


const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

queryInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = queryInput.value.trim();
    if (query) {
      fetchMovies(query);
    }
  }
});


/**
 * Display movie details inside the modal.
 */
function showMovieDetails(movie) {
  modalBody.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${movie.Title}" />
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Runtime:</strong> ${movie.Runtime}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Actors:</strong> ${movie.Actors}</p>
  `;
  modal.classList.remove('hidden');
}

