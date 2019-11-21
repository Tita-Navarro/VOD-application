import fetch from 'isomorphic-fetch';

const baseUrl = 'https://demo5520281.mockable.io/movies';

export default {
    getMovies,
    getMovie
};

async function getMovies(){
    const request = await fetch(`${baseUrl}`);
    const data = await request.json();
    const movies = data.moviesn.map((m)=> movieCard(m))

    return movies;
}

async function getMovie(movieId){
    const request = await fetch(`${baseUrl}/i=${movieId}`)
  const data = await request.json()
  if( ! data.moviesn ) return null
  const movie = movieCard(data.moviesn.shift());

  return movie;
}

function movieCard(movie){
    const newMovie = {};

    newMovie.title = movie.titleMovie;
    newMovie.year= movie.yearMovie;
    newMovie.description= movie.descriptionMovie;
    newMovie.audios = [];
    newMovie.subtitles =[];
    newMovie.credits= [];
    newMovie.duration= movie.durationMovie;
    newMovie.genres = [];
    newMovie.parentalRatings= [];
    newMovie.images= [];
    newMovie.contents= [];

    for(let i=1; i<=20; i++){
        if(movie[`entries${i}`]!== '' && movie[`movies${i}`] !== ''){
            newMovie.contents.push({
                url: movie[`contents${i}`],
            })
        }
    }
    return newMovie;
}