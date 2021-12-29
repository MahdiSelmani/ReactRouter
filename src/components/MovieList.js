import MovieCard from "./MovieCard";

function MovieList({ setMovies, movies, rating, word }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }}>
            {movies.filter(el => el.rate >= rating && el.title.toUpperCase().includes(word.toUpperCase())).map(el => <MovieCard el={el} key={el.id} movies={movies} setMovies={setMovies} />)}
        </div>
    )
}
export default MovieList;