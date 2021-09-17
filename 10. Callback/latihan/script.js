// /// 10.2 Latihan Callback

// Search
$('.search-button').on('click', (e) => {
  const keyword = $('.input-keyword').val();

  // jQuery AJAX
  $.ajax({
    // set URL
    url: 'http://www.omdbapi.com/?apikey=c8800146&s=$' + keyword,

    // jika success ngapain
    success: (response) => {
      const movies = response.Search; // tempat object
      let cards = ''; // var untuk card
      movies.forEach((movie) => {
        cards += showCards(movie);

        // masukkan ke html
        $('.movie-list').html(cards);

        // details
        $('.btn-show-details').on('click', (btn) => {
          const imdbID = btn.target.dataset.imdbid;

          // ajax lagi
          $.ajax({
            url: `http://www.omdbapi.com/?apikey=c8800146&i=${imdbID}`,
            // jika success ngapain
            success: (movie) => {
              const movieDetails = showMovieDetails(movie);
              $('.modal-body').html(movieDetails);
            },
          });
        });
      });
    },

    // jika error ngapain
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(movie) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${movie.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-primary btn-show-details" data-bs-toggle="modal" data-bs-target="#detailsModal" data-imdbID="${movie.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetails(movie) {
  return `<div class="row">
            <div class="col-md-4">
              <img src="${movie.Poster}"
                class="img-fluid"/>
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h5>${movie.Title} ${movie.Year}</h5></li>
                <li class="list-group-item"><strong>Released : </strong>${movie.Released}</li>
                <li class="list-group-item"><strong>imdb Rating : </strong>${movie.imdbRating}/10</li>
                <li class="list-group-item"><strong>Genre :</strong>${movie.Genre}</li>
                <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
                <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
              </ul>
            </div>
          </div>`;
}
