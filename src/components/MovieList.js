import MovieCard from "./MovieCard";

function MovieList({ setMovies, movies, rating, word }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }}>
            {movies.find(el=> el.title.toUpperCase().includes(word.toUpperCase())) ? movies.filter(el => el.rate >= rating && el.title.toUpperCase().includes(word.toUpperCase())).map(el => <MovieCard el={el} key={el.id} movies={movies} setMovies={setMovies} />) : <h3 style={{fontFamily:'cursive', fontStyle:'italic', margin:'50px'}}>We did not found this movie :(  </h3>}
        </div>
    )
}
export default MovieList;
