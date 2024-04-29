const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI1NzBjY2RkNzRhN2VjNzkxODBmNjlmNzY0MTQxOSIsInN1YiI6IjY2MjllNmFlNDNjZDU0MDEyMTg0NTQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dkDbfeB-CrXf8LGmg9CEXEwcYYQ8NI9ILFb1WnFkvKs',
  },
};

let movieInfo = [];

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;
    let innerHTML = '';
    movieInfo = response.results;

    movies.forEach((movie) => {
      // console.log('movie', movie);

      let cardBox = (innerHTML += `<div id=${movie.id} class="card">
      <img src=https://image.tmdb.org/t/p/w500${movie.poster_path} alt='movie img'/>
      <div>
        <span class='card-overview'>${movie.overview}</span>
        <h3>${movie.title}</h3>
        <p>${movie.vote_average}</p>  
      </div>
      </div>`);
      document.querySelector('.card-box').innerHTML = cardBox;
    });

    // alert창

    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', function (event) {
        console.log(event.currentTarget.id);
        alert(`영화 id: ${event.currentTarget.id}`);
      });
    });
    a(movieInfo);
  })
  .catch((err) => console.error(err));

let a = (movies) => {
  let addHTML = '';
  if (movies.length === 0) {
    // movies = movieInfo;
    movieInfo = movies;
  }
};

// input값 지우기
function clear() {
  document.getElementById('search-movie').value = '';
}

// 영화 검색
const searchMovieBtn = document.getElementById('search-button');

searchMovieBtn.addEventListener('click', function (event) {
  let searchMovie = document.getElementById('search-movie');
  const searchValue = searchMovie.value.trim();
  console.log(searchValue);
  let filteredMovie = movieInfo.filter((movie) => {
    return movie.title.includes(searchValue);
  });
  console.log(filteredMovie);

  a(filteredMovie);
});
