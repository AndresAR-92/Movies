'use strict';

class Movie {
  constructor(title, year, director, cast) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.cast = cast;
  }
}

const harryPotter = new Movie('Harry Potter', 2002, 'Director X', [
  'Daniel Radcliffe',
  'Emma Watson',
]);

const furiosa = new Movie('Furiosa', 2024, 'George Miller', [
  'Anya Taylor-Joy',
  'Chris Hemsworth',
  'Tom Burke',
]);

const dune = new Movie(
  'Dune Part 2',
  2024,
  'Denis Villeneuve',
  'Timothée Chalamet, Florence Pugh, Rebeca Ferguson'
);

const myMovies = [harryPotter, furiosa, dune];

displayMovies();

// Seleccionar elementos del Modal
const modalBtn = document.getElementById('showModal');
const modalEl = document.getElementById('movieModal');
const formEl = document.querySelector('form');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

// Seleccionar inputs
const titleEl = document.querySelector('#form-title');
const yearEl = document.querySelector('#form-year');
const directorEl = document.querySelector('#form-director');
const castEl = document.querySelector('#form-cast');

modalBtn.addEventListener('click', () => {
  modalEl.showModal();
});

submitBtn.addEventListener('click', e => {
  e.preventDefault();

  AddMovie(titleEl.value, yearEl.value, directorEl.value, castEl.value);
  modalEl.close();
  formEl.reset();
});

cancelBtn.addEventListener('click', e => {
  e.preventDefault();

  modalEl.close();
});

function AddMovie(title, year, director, cast) {
  const newMovie = new Movie(title, year, director, cast);
  myMovies.push(newMovie);
  displayMovies();
}

function deleteMovie(index) {
  myMovies.splice(index, 1);
  displayMovies();
}

function displayMovies() {
  const moviesEl = document.querySelector('.movies');
  moviesEl.innerHTML = '';

  myMovies.forEach((movie, i) => {
    // Crear tarjeta
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <div class="top-card">
      <p class="movie-title">${movie.title}</p>
    </div>
    <div class="details-card">
      <p class="movie-year">Release Year: ${movie.year}</p>
      <p class="movie-director">Director: ${movie.director}</p>
      <p class="movie-actors">Cast: ${movie.cast
        .toString()
        .replaceAll(',', ', ')}</p>
    </div>
    <div class="card-buttons">
      <button id="delete" data-index="${myMovies.indexOf(
        movie
      )}" onclick="deleteMovie()">Remove</button>
    </div>
    `;
    // Añadir tarjeta
    moviesEl.appendChild(card);
  });
}
